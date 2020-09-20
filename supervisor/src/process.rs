use crate::error::Error;
use tokio::stream::StreamExt;

pub struct Process {
    pub exec: String,
    pub args: Vec<String>,
    pub stdout_path: String,
    pub stderr_path: String,
    pub target_address: String,
}

impl Process {
    pub async fn spawn(self) -> Result<ProcessHandle, Box<dyn std::error::Error>> {
        log::trace!(
            "spawning cmd={} {}, stdout_path={}, stderr_path={}, target_address={}",
            &self.exec,
            self.args.clone().join(" "),
            &self.stdout_path,
            &self.stderr_path,
            &self.target_address
        );

        use nix::fcntl::{fcntl, FdFlag, OFlag, F_GETFD, F_GETFL, F_SETFD, F_SETFL};

        let (pipe_i, pipe_o) = nix::unistd::pipe()?;
        let mut fdopts = FdFlag::from_bits(fcntl(pipe_i, F_GETFD)?).unwrap();
        fdopts.set(FdFlag::FD_CLOEXEC, true);
        fcntl(pipe_i, F_SETFD(fdopts)).unwrap();

        let stdout = tokio::fs::File::create(self.stdout_path.clone()).await?;
        let stderr = tokio::fs::File::create(self.stderr_path.clone()).await?;

        let child = tokio::process::Command::new(self.exec.clone())
            .args(self.args.clone())
            .env("ISUXBENCH_REPORT_FD", format!("{}", pipe_o))
            .env("ISUXBENCH_TARGET", self.target_address.clone())
            .stdin(std::process::Stdio::null())
            .stdout(stdout.into_std().await)
            .stderr(stderr.into_std().await)
            .kill_on_drop(true)
            .spawn()?;

        nix::unistd::close(pipe_o).unwrap();
        let mut flopts = OFlag::from_bits(fcntl(pipe_i, F_GETFL)?).unwrap();
        flopts.set(OFlag::O_NONBLOCK, true);
        fcntl(pipe_i, F_SETFL(flopts)).unwrap();

        log::info!(
            "spawned cmd={} {}, stdout_path={}, stderr_path={}, target_address={}, pid={}",
            &self.exec,
            self.args.clone().join(" "),
            &self.stdout_path,
            &self.stderr_path,
            &self.target_address,
            child.id()
        );

        let channel = Channel { fd: pipe_i };
        let codec = tokio_util::codec::LengthDelimitedCodec::builder()
            .length_field_length(2)
            .new_read(tokio::io::PollEvented::new(channel).unwrap());

        Ok(ProcessHandle { child, codec, child_alive: true, channel_open: true })
    }
}

pub struct ProcessHandle {
    child: tokio::process::Child,
    codec: tokio_util::codec::FramedRead<
        tokio::io::PollEvented<Channel>,
        tokio_util::codec::LengthDelimitedCodec,
    >,

    child_alive: bool,
    channel_open: bool,
}

pub enum Message<T> {
    Data(T),
    DataFinished,
    ProcessExit(std::process::ExitStatus),
    Error(Error),
}

impl ProcessHandle {
    pub fn kill(&mut self) -> tokio::io::Result<()> {
        if self.child_alive {
            self.child.kill()
        } else {
            tokio::io::Result::Ok(())
        }
    }

    pub async fn message<T>(&mut self) -> Option<Message<T>>
    where
        T: prost::Message + Default,
    {
        if !self.channel_open && !self.child_alive {
            return None;
        }

        tokio::select! {
            data = self.codec.next(), if self.channel_open =>  match data {
                Some(Ok(raw)) => match T::decode(raw) {
                    Ok(item) => Some(Message::Data(item)),
                    Err(e) => Some(Message::Error(Error::DecodeError(e))),
                } ,
                Some(Err(e)) => Some(Message::Error(Error::IoError(e))),
                None => {
                    self.channel_open = false;
                    Some(Message::DataFinished)
                },
            },
            result = &mut self.child, if self.child_alive => {
                self.child_alive = false;
                match result {
                    Ok(exit_status) => Some(Message::ProcessExit(exit_status)),
                    Err(e) => Some(Message::Error(Error::IoError(e))),
                }
            }
        }
    }
}

struct Channel {
    fd: std::os::unix::io::RawFd, // TODO: close on drop
}

impl Drop for Channel {
    fn drop(&mut self) {
        log::trace!("channel#drop");
        loop {
            match nix::unistd::close(self.fd) {
                Ok(_) => break,
                Err(nix::Error::Sys(nix::errno::Errno::EBADF)) => break,
                Err(nix::Error::Sys(nix::errno::Errno::EINTR)) => {
                    log::warn!("channel#drop: EINTR");
                }
                Err(e) => panic!(e),
            }
        }
        log::trace!("channel#drop: done");
    }
}

impl std::io::Read for Channel {
    fn read(&mut self, bytes: &mut [u8]) -> std::io::Result<usize> {
        log::trace!("channel#read");
        match nix::unistd::read(self.fd, bytes) {
            Ok(s) => std::io::Result::Ok(s),
            Err(nix::Error::Sys(e)) => std::io::Result::Err(std::io::Error::from(e)),
            Err(e) => panic!(e),
        }
    }
}

impl mio::event::Evented for Channel {
    fn register(
        &self,
        poll: &mio::Poll,
        token: mio::Token,
        interest: mio::Ready,
        opts: mio::PollOpt,
    ) -> std::io::Result<()> {
        mio::unix::EventedFd(&self.fd).register(poll, token, interest | mio::unix::UnixReady::hup(), opts)
    }

    fn reregister(
        &self,
        poll: &mio::Poll,
        token: mio::Token,
        interest: mio::Ready,
        opts: mio::PollOpt,
    ) -> std::io::Result<()> {
        mio::unix::EventedFd(&self.fd).reregister(poll, token, interest | mio::unix::UnixReady::hup(), opts)
    }

    fn deregister(&self, poll: &mio::Poll) -> std::io::Result<()> {
        mio::unix::EventedFd(&self.fd).deregister(poll)
    }
}
