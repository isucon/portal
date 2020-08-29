use crate::api::isuxportal::proto::services::bench::receive_benchmark_job_response::JobHandle;
use crate::api::isuxportal::proto::resources::BenchmarkResult;
use crate::api::isuxportal::proto::resources::benchmark_result;
use crate::config::Config;
use crate::error::Error;
use crate::reporter::{Reporter, ReporterInbox, Report};

pub struct Worker {
    job_handle: JobHandle,
    hard_timeout: u64,
	command_exec: String,
	command_args: Vec<String>,
}


impl Worker {
    pub fn new(job_handle: JobHandle, config: &Config, command_exec: String, command_args: Vec<String>) -> Self {
        Self { job_handle, hard_timeout: config.hard_timeout, command_exec, command_args }
    }

	pub async fn perform(&self, channel: tonic::transport::Channel) -> Result<(), Box<dyn std::error::Error>> {
        log::info!("Performing job: {:#?}", self.job_handle);

        let (mut reporter, reporter_task) = Reporter::new(channel.clone(), self.job_handle.clone()).start();
        tokio::pin!(reporter_task);

        self.report_first(&mut reporter).await;

        let mut deadline = tokio::time::delay_for(std::time::Duration::from_secs(self.hard_timeout));
        let mut ticks = tokio::time::interval(std::time::Duration::from_secs(2));
        let mut score = 0;

        loop {
            tokio::select! {
                _ = &mut deadline => {
                    log::warn!("Deadline");
                    break;
                },
                _ = ticks.tick() => {
                    score += 1;
                    self.report_self(&mut reporter, score).await;
                }
                result = &mut reporter_task => {
                    match result {
                        Ok(_) => {
                            log::trace!("Reporter was nominally shut down.");
                        }
                        Err(e) => {
                            log::error!("Reporter was errored: {:#?}", e);
                            break;
                        }
                    }
                }
            }
        }

        reporter.close().await;
        reporter_task.await?;
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

//                execution: Some(benchmark_result::Execution {
//                    reason: "r".to_string(),
//                    stdout: "o".to_string(),
//                    stderr: "e".to_string(),
//                    exit_status: 255,
//                    exit_signal: 0,
//                    signaled: false,
//                }),

    async fn report_self(&self, reporter: &mut ReporterInbox, score: i64) {
        let report = Report {
            completed: false,
            execution_only: false,
            result: BenchmarkResult {
                finished: false,
                passed: false,
                score: score,
                score_breakdown: Some(benchmark_result::ScoreBreakdown {
                    raw: score,
                    deduction: 0,
                }),
                execution: None,
                marked_at: Some(prost_types::Timestamp::from(std::time::SystemTime::now())),
                survey_response: None,
            },
        };
        reporter.send(report).await
    }
}
