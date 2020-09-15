use std::os::unix::process::ExitStatusExt;
use tokio::io::AsyncReadExt;

use crate::api::isuxportal::proto::services::bench::receive_benchmark_job_response::JobHandle;
use crate::api::isuxportal::proto::resources::BenchmarkResult;
use crate::api::isuxportal::proto::resources::benchmark_result;
use crate::config::Config;
use crate::process::Process;
use crate::error::Error;
use crate::reporter::{Reporter, ReporterInbox, Report};

pub struct Worker {
    job_handle: JobHandle,
    hard_timeout: u64,
	command_exec: String,
	command_args: Vec<String>,
    log_directory: String,
}


impl Worker {
    pub fn new(job_handle: JobHandle, config: &Config, command_exec: String, command_args: Vec<String>) -> Self {
        Self { job_handle, hard_timeout: config.hard_timeout, command_exec, command_args, log_directory: config.log_directory.clone() }
    }

    pub fn stdout_path(&self) -> String {
        format!("{}/job-{}.out.log", self.log_directory, self.job_handle.job_id)
    }

    pub fn stderr_path(&self) -> String {
        format!("{}/job-{}.err.log", self.log_directory, self.job_handle.job_id)
    }

    pub fn process(&self) -> Process {
        Process {
            exec: self.command_exec.clone(),
            args: self.command_args.clone(),
            stdout_path: self.stdout_path(),
            stderr_path: self.stderr_path(),
            target_address: self.job_handle.target_ipv4_address.clone(),
        }
    }

	pub async fn perform(&self, channel: tonic::transport::Channel) -> Result<(), Box<dyn std::error::Error>> {
        use crate::process::Message;

        log::info!("Performing job: {:?}", self.job_handle);

        let (mut reporter, reporter_task) = Reporter::new(channel.clone(), self.job_handle.clone()).start();
        tokio::pin!(reporter_task);

        let process = self.process();
        let mut handle = process.spawn().await?;

        let mut deadline = tokio::time::delay_for(std::time::Duration::from_secs(self.hard_timeout));
        self.report_first(&mut reporter).await;

        let mut process_exit_status: Option<std::process::ExitStatus> = None;
        let mut error: Option<Error> = None;
        loop {
            log::trace!("Performing loop");
            let mut do_shutdown = false;
            tokio::select! {
                _ = &mut deadline => {
                    log::warn!("Deadline");
                    error = Some(Error::BenchmarkerExceededDeadline);
                    do_shutdown = true;
                },
                message = handle.message::<BenchmarkResult>() => match message {
                    Some(Message::Data(m)) => {
                        self.report_progress(&mut reporter, m).await;
                    },
                    Some(Message::DataFinished) => {
                        log::trace!("Data finished");
                    },
                    Some(Message::ProcessExit(exit_status)) => {
                        log::info!("Child exit status: {:?}", exit_status);
                        process_exit_status = Some(exit_status);
                    },
                    Some(Message::Error(e)) => {
                        log::error!("Error: {:?}", e);
                        error = Some(e);
                        do_shutdown = true;
                    },
                    None => {
                        do_shutdown = true;
                    },
                },
                result = &mut reporter_task => {
                    match result {
                        Ok(_) => {
                            panic!(Error::UnexpectedReporterShutdown);
                        }
                        Err(e) => {
                            log::error!("Reporter was errored: {:?}", e);
                            error = Some(e);
                            do_shutdown = true;
                        }
                    }
                }
            }
            if do_shutdown {
                break;
            }
        }

        log::info!("Finishing job execution");
        handle.kill().expect("cannot kill child");

        let stdout = read_log(self.stdout_path()).await
            .unwrap_or_else(|e| {
                log::error!("Cannot read stdout: {:?}", e);
                error = Some(e);
                "".to_string()
            });
        let stderr = read_log(self.stderr_path()).await
            .unwrap_or_else(|e| {
                log::error!("Cannot read stderr: {:?}", e);
                error = Some(e);
                "".to_string()
            });

        let final_report = self.generate_final_report(error.as_ref(), process_exit_status, stdout, stderr);
        reporter.send(final_report).await;

        reporter.close().await;
        reporter_task.await.unwrap();
        if let Some(e) = error {
            log::error!("Job failed to run");
            return Err(Box::new(e));
        }
        log::info!("Job successfully performed");
        Ok(())
	}

    async fn report_first(&self, reporter: &mut ReporterInbox) {
        let report = Report {
            completed: false,
            execution_only: false,
            result: BenchmarkResult {
                finished: false,
                passed: false,
                score: 0,
                score_breakdown: Some(benchmark_result::ScoreBreakdown {
                    raw: 0,
                    deduction: 0,
                }),
                execution: None,
                marked_at: Some(prost_types::Timestamp::from(std::time::SystemTime::now())),
                survey_response: None,
            },
        };
        reporter.send(report).await
    }

    async fn report_progress(&self, reporter: &mut ReporterInbox, result: BenchmarkResult) {
        reporter.send(Report {
            completed: false,
            execution_only: false,
            result,
        }).await;
    }

    fn generate_final_report(&self, known_error: Option<&Error>, exit_status: Option<std::process::ExitStatus>, stdout: String, stderr: String) -> Report {
        let mut execution = benchmark_result::Execution {
            reason: "".to_string(),
            stdout,
            stderr,
            exit_status: 9000,
            exit_signal: -1,
            signaled: false,
        };
        match exit_status {
            Some(status) => {
                execution.exit_status = status.code().unwrap_or(9001);
                if let Some(exit_signal) = status.signal() {
                    execution.exit_signal = exit_signal;
                    execution.signaled = true;
                }
            } 
            None => {
                execution.reason = "[Supervisor Internal Error] A benchmarker didn't run correctly".to_string();
            },
        }
        if let Some(e) = known_error {
            let internal_log = format!("\n\n[Supervisor Internal Error] Error while run:\n\n{:#?}\n", e);
            execution.stderr.push_str(&internal_log);
            execution.exit_status = 9002;
        }

        Report {
            completed: true,
            execution_only: true,
            result: BenchmarkResult {
                finished: false,
                passed: false,
                score: 0,
                score_breakdown: None,
                execution: Some(execution),
                marked_at: Some(prost_types::Timestamp::from(std::time::SystemTime::now())),
                survey_response: None,
            },
        }
    }
}

const LOG_MAX: i64 = 48000;
async fn read_log(path: String) -> Result<String, Error> {
    let mut buf: Vec<u8> = Vec::with_capacity(16000);
    let mut f = tokio::fs::File::open(path.clone()).await?;

    match f.seek(std::io::SeekFrom::End(-LOG_MAX)).await {
        Ok(_) => {
            log::warn!("Log {} will be sent truncated", path);
            let truncate_msg = "[... early log was truncated (log was too long) ...]\n".as_bytes();
            buf.reserve((LOG_MAX as usize) + truncate_msg.len());
            buf.extend_from_slice(truncate_msg);
        },
        Err(e) => {
            if e.kind() != std::io::ErrorKind::InvalidInput {
                return Err(Error::IoError(e));
            }
        }
    }
    f.read_to_end(&mut buf).await?;
    let ret = String::from_utf8_lossy(buf.as_slice()).into_owned();
    return Ok(ret);
}
