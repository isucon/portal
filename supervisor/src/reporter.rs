use crate::api::isuxportal::proto::resources::benchmark_result;
use crate::api::isuxportal::proto::resources::BenchmarkResult;
use crate::api::isuxportal::proto::services::bench::benchmark_report_client::BenchmarkReportClient;
use crate::api::isuxportal::proto::services::bench::receive_benchmark_job_response::JobHandle;
use crate::api::isuxportal::proto::services::bench::ReportBenchmarkResultRequest;
use crate::api::isuxportal::proto::services::bench::ReportBenchmarkResultResponse;
use crate::config::Config;
use crate::error::Error;

#[derive(Debug)]
pub struct Report {
    pub completed: bool,
    pub execution_only: bool,
    pub result: BenchmarkResult,
}

#[derive(Debug)]
enum OutboundMessage {
    Report(Report),
    Shutdown,
}

#[derive(Debug)]
struct Context {
    shutdown: bool,
    nonce: i64,
    last_result: BenchmarkResult,
    request_must_retry: Option<ReportBenchmarkResultRequest>,
}

impl Context {
    fn new() -> Self {
        Self {
            shutdown: false,
            nonce: 0,
            last_result: BenchmarkResult {
                finished: false,
                passed: false,
                score: 0,
                score_breakdown: Some(benchmark_result::ScoreBreakdown {
                    raw: 0,
                    deduction: 0,
                }),
                execution: None,
                marked_at: None,
                survey_response: None,
            },
            request_must_retry: None,
        }
    }

    fn next_nonce(&mut self) -> i64 {
        self.nonce += 1;
        self.nonce
    }
}

#[derive(Clone)]
pub struct ReporterInbox {
    outbound_tx: tokio::sync::mpsc::Sender<OutboundMessage>,
}

impl ReporterInbox {
    pub async fn send(&mut self, report: Report) {
        log::trace!("ReporterInbox#send: {:?}", report);
        self.outbound_tx.send(OutboundMessage::Report(report)).await.unwrap();
        log::trace!("ReporterInbox#send: done");
    }

    pub async fn close(&mut self) {
        log::trace!("ReporterInbox#close");
        if let Err(e) = self.outbound_tx.send(OutboundMessage::Shutdown).await {
            log::warn!("ReporterInbox#close: {:#?}", e);
        }
        log::trace!("ReporterInbox#close: done");
    }
}

pub struct Reporter {
    job_handle: JobHandle,
    channel: tonic::transport::Channel,
}

impl Reporter {
    pub fn new(channel: tonic::transport::Channel, job_handle: JobHandle) -> Self {
        Self { channel, job_handle }
    }

    pub fn start(self) -> (ReporterInbox, impl std::future::Future<Output = Result<(), Error>>) {
        log::info!("Reporter/start: Starting");
        let (outbound_tx, outbound_rx) = tokio::sync::mpsc::channel(4);
        let inbox = ReporterInbox { outbound_tx };

        (inbox, self.outbound_loop(outbound_rx))
    }


    async fn outbound_loop(self, mut rx: tokio::sync::mpsc::Receiver<OutboundMessage>) -> Result<(), Error> {
        log::trace!("Reporter/outbound_loop: Starting");
        let mut client = BenchmarkReportClient::new(self.channel.clone());
        let mut context = Context::new();
        let mut num_requests = 0;

        while !context.shutdown {
            if num_requests > 0 {
                tokio::time::delay_for(std::time::Duration::new(1, 0)).await; // TODO: more appropriate retry
            }
            num_requests += 1;
            let (inner_outbound_txi, inner_outbound_rx) = tokio::sync::mpsc::channel(6);
            let mut inner_outbound_tx = Some(inner_outbound_txi);

            // Need at least single message to start receiving response
            log::trace!("Reporter/outbound_loop: Waiting for first data for new connection");
            self.outbound_process(&mut context, inner_outbound_tx.as_mut().unwrap(), rx.recv().await).await;
            if context.shutdown { //XXX:
                log::info!("Reporter/outbound_loop: reporter is shut down while waiting for first data for new connection");
                break;
            }

            log::info!("Reporter/outbound_loop: Opening");
            let mut closed = false;
            let response = client.report_benchmark_result(tonic::Request::new(inner_outbound_rx)).await
                .map_err(|e| Error::RequestFailure(e) )?;
            log::trace!("Reporter/outbound_loop: Opened");

            let inbound_loop = self.inbound_loop(response);
            tokio::pin!(inbound_loop);

            while !closed {
                log::trace!("Reporter/outbound_loop: Connection loop");
                tokio::select! {
                    in_msg = &mut inbound_loop => {
                        // error is considered transient and handled and displayed in inbound_loop
                        if let Ok(last_acked_nonce) = in_msg {
                            self.inbound_finalize(&mut context, last_acked_nonce).await;
                        }
                        closed = true;
                    },
                    ob_msg = rx.recv(), if inner_outbound_tx.is_some() => {
                        self.outbound_process(&mut context, inner_outbound_tx.as_mut().unwrap(), ob_msg).await;
                        if context.shutdown {
                            rx.close();
                            drop(inner_outbound_tx.take());
                        }
                    },
                }
            }
            log::trace!("Reporter/outbound_loop: Outbound loop continue...");
        }

        log::info!("Reporter/outbound_loop: Leaving");

        if let Some(req) = context.request_must_retry {
            self.retry_last_report(req).await?;
        }
        Ok(())
    }

    async fn inbound_loop(&self, response: tonic::Response<tonic::Streaming<ReportBenchmarkResultResponse>>) -> Result<i64, tonic::Status> {
        let mut rx = response.into_inner();
        let mut last_acked_nonce = -1;

        log::trace!("Reporter/inbound_loop: Start");
        loop {
            let in_msg = rx.message().await;
            match in_msg {
                Ok(Some(res)) => {
                    log::info!("Reporter/inbound_loop/response: {:#?}", res);
                    last_acked_nonce = res.acked_nonce;
                },
                Ok(None) => {
                    log::trace!("Reporter/inbound_loop/ok-none:");
                    break;
                },
                Err(err) => {
                    log::error!("Reporter/inbound_loop/error: ERR {:#?}", err);
                    return Err(err);
                },
            }
        }
        log::trace!("Reporter/inbound_loop: Nominal Leaving");
        Ok(last_acked_nonce)
    }

    // FIXME: https://github.com/rust-lang/rust/issues/63033
    //        async fn inbound_finalize(&self, context: &mut Context, in_msg: Result<i64, Box<dyn std::error::Error>>) {
    async fn inbound_finalize(&self, context: &mut Context, last_acked_nonce: i64) {
        if let Some(req) = context.request_must_retry.as_ref() {
            if last_acked_nonce >= req.nonce  {
                context.request_must_retry = None;
            }
        }
    }

    async fn outbound_process(&self, context: &mut Context, inner_outbound_tx: &mut tokio::sync::mpsc::Sender<ReportBenchmarkResultRequest>, ob_msg: Option<OutboundMessage>) {
        match ob_msg {
            Some(OutboundMessage::Report(report)) => {
                log::info!("Reporter/outbound_loop/OutboundMessage: Sending {:#?}", report);

                let mut result = report.result;

                if report.execution_only {
                    let mut new_execution = result.execution.map(|e| e.clone()).unwrap_or(benchmark_result::Execution {
                        reason: "".to_string(),
                        stdout: "".to_string(),
                        stderr: "".to_string(),
                        exit_status: -1,
                        exit_signal: -1,
                        signaled: false,
                    });

                    result = context.last_result.clone();
                    if new_execution.reason.len() == 0 {
                        if let Some(last_execution) = context.last_result.execution.as_ref() {
                            new_execution.reason = last_execution.reason.clone()
                        }
                    }

                    result.execution = Some(new_execution);
                }

                result.finished = report.completed;

                let req = ReportBenchmarkResultRequest {
                    job_id: self.job_handle.job_id,
                    handle: self.job_handle.handle.clone(),
                    nonce: context.next_nonce(),
                    result: Some(result.clone()),
                };

                log::info!("Reporter/outbound_loop/ReportBenchmarkResultRequest: rep.completed={:#?} rep.execution_only={:#?} req={:#?}", report.completed, report.execution_only, req);

                if result.finished || report.completed {
                    context.request_must_retry = Some(req.clone());
                }

                log::trace!("Reporter/outbound_loop/outbound_process: Enqueue...");
                inner_outbound_tx.send(req).await.unwrap(); // TODO: unwrap is unsuitable
                log::trace!("Reporter/outbound_loop/outbound_process: Enqueued");
                context.last_result = result;
            }
            Some(OutboundMessage::Shutdown) => {
                log::info!("Reporter/outbound_loop/Shutdown");
                context.shutdown = true;
            },
            None => {
            }
        }
    }

    const MAX_RETRIES: u32 = 5;
    async fn retry_last_report(&self, orig_request: ReportBenchmarkResultRequest) -> Result<(), Error> {
        let mut last_error: Option<Error> = None;
        for num_attempt in 1..Self::MAX_RETRIES {
            if num_attempt > 1 {
                tokio::time::delay_for(std::time::Duration::new(1, 0)).await; // TODO: more appropriate retry
            }

            log::warn!("Reporter/retry_last_report: Retrying request (attempt={:#?}) {:#?}", num_attempt, orig_request);
            let (mut outgoing_tx, outgoing_rx) = tokio::sync::mpsc::channel(1); // oneshot is not a stream
            let mut request = orig_request.clone();
            request.nonce = 0;
            outgoing_tx.send(request).await.unwrap();
            drop(outgoing_tx);

            let mut client = BenchmarkReportClient::new(self.channel.clone());
            let response_result = client.report_benchmark_result(tonic::Request::new(outgoing_rx)).await
                .map_err(|e| Error::RequestFailure(e));

            if let Err(e) = response_result {
                last_error = Some(e);
                continue;
            }

            let mut inbound_rx = response_result.unwrap().into_inner();
            let in_msg = inbound_rx.message().await;
            match in_msg {
                Ok(Some(res)) => {
                    log::info!("Reporter/retry_last_report/response: {:#?}", res);
                    if res.acked_nonce == 0 {
                        log::info!("Reporter/retry_last_report/response: OK");
                        return Ok(());
                    } else {
                        log::error!("Reporter/retry_last_report/reponse: Nonce not acknowledged");
                    }
                },
                Ok(None) => {
                    log::error!("Reporter/retry_last_report/response: NONE");
                    last_error = Some(Error::NotAcknowledged);
                    break;
                },
                Err(err) => {
                    log::error!("Reporter/retry_last_report/response: ERR {:#?}", err);
                    last_error = Some(Error::RequestFailure(err));
                },
            }
        }
        Err(last_error.unwrap())
    }
}
