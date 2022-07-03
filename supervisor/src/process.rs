use crate::error::Error;
use tokio_stream::StreamExt;

pub struct Process {
    pub exec: String,
    pub args: Vec<String>,
    pub stdout_path: String,
    pub stderr_path: String,
    pub target_address: String,
    pub all_addresses: [String; 3],
}

impl Process {
    pub async fn spawn(self) -> Result<ProcessHandle, Box<dyn std::error::Error>> {
        let all_addresses_string = self.all_addresses.join(",");
        log::trace!(
            "spawning cmd={} {}, stdout_path={}, stderr_path={}, target_address={}, all_addresses={}",
            &self.exec,
            self.args.clone().join(" "),
            &self.stdout_path,
            &self.stderr_path,
            &self.target_address,
            &all_addresses_string,
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
            .env("ISUXBENCH_ALL_ADDRESSES", all_addresses_string)
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
            "spawned cmd={} {}, stdout_path={}, stderr_path={}, target_address={}, pid={:?}",
            &self.exec,
            self.args.clone().join(" "),
            &self.stdout_path,
            &self.stderr_path,
            &self.target_address,
            child.id(),
        );

        let pipe_async_i = tokio::io::unix::AsyncFd::new(pipe_i)?;

        let channel = Channel::new(pipe_async_i);
        let codec =
            tokio_util::codec::LengthDelimitedCodec::builder().length_field_length(2).new_read(channel);

        Ok(ProcessHandle { child, codec, child_alive: true, channel_open: true })
    }
}

pub struct ProcessHandle {
    child: tokio::process::Child,
    codec: tokio_util::codec::FramedRead<Channel, tokio_util::codec::LengthDelimitedCodec>,

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
    pub fn kill(&mut self) -> std::io::Result<()> {
        if self.child_alive {
            self.child.start_kill()
        } else {
            std::io::Result::Ok(())
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
            result = self.child.wait(), if self.child_alive => {
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
    inner: Option<tokio::io::unix::AsyncFd<std::os::unix::io::RawFd>>,
}

impl Channel {
    fn new(inner: tokio::io::unix::AsyncFd<std::os::unix::io::RawFd>) -> Self {
        Self { inner: Some(inner) }
    }
}

impl tokio::io::AsyncRead for Channel {
    fn poll_read(
        self: std::pin::Pin<&mut Self>,
        cx: &mut std::task::Context<'_>,
        buf: &mut tokio::io::ReadBuf<'_>,
    ) -> std::task::Poll<std::io::Result<()>> {
        loop {
            let mut guard = futures::ready!(self
                .inner
                .as_ref()
                .expect("inner is consumed or not given")
                .poll_read_ready(cx))?;
            match guard.try_io(|inner| match nix::unistd::read(*inner.get_ref(), buf.initialize_unfilled()) {
                Ok(s) => std::io::Result::Ok(s),
                Err(e) => std::io::Result::Err(std::io::Error::from(e)),
            }) {
                Ok(Ok(n)) => {
                    buf.advance(n);
                    return std::task::Poll::Ready(Ok(()));
                }
                Ok(Err(e)) => {
                    return std::task::Poll::Ready(Err(e));
                }
                Err(_would_block) => continue,
            }
        }
    }
}

impl Drop for Channel {
    fn drop(&mut self) {
        match self.inner.take() {
            Some(i) => {
                let fd = i.into_inner();
                loop {
                    match nix::unistd::close(fd) {
                        Ok(_) => break,
                        Err(nix::errno::Errno::EBADF) => break,
                        Err(nix::errno::Errno::EINTR) => {
                            log::warn!("channel#drop: EINTR");
                            continue;
                        }
                        Err(e) => panic!("{}", e),
                    }
                }
            }
            None => {}
        }
    }
}
