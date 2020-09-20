use crate::api::isuxportal::proto::resources::BenchmarkResult;
use crate::api::isuxportal::proto::services::bench::benchmark_report_client::BenchmarkReportClient;
use crate::api::isuxportal::proto::services::bench::receive_benchmark_job_response::JobHandle;
use crate::api::isuxportal::proto::services::bench::ReportBenchmarkResultRequest;
use crate::api::isuxportal::proto::services::bench::ReportBenchmarkResultResponse;
use crate::error::Error;

#[derive(Debug)]
pub struct Report {
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
}

impl Context {
    fn new() -> Self {
        Self { shutdown: false, nonce: 0 }
    }

    fn next_nonce(&mut self) -> i64 {
        self.nonce += 1;
        self.nonce
    }
}

#[derive(Clone)]
pub struct ReporterInbox {
    outbound_tx: tokio::sync::mpsc::UnboundedSender<OutboundMessage>,
}

impl ReporterInbox {
    pub async fn send(&mut self, report: Report) {
        log::trace!("ReporterInbox#send: {:?}", report);
        self.outbound_tx.send(OutboundMessage::Report(report)).unwrap();
        log::trace!("ReporterInbox#send: done");
    }

    pub async fn close(&mut self) {
        log::trace!("ReporterInbox#close");
        if let Err(e) = self.outbound_tx.send(OutboundMessage::Shutdown) {
            log::warn!("ReporterInbox#close: {:?}", e);
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
        let (outbound_tx, outbound_rx) = tokio::sync::mpsc::unbounded_channel();
        let inbox = ReporterInbox { outbound_tx };

        (inbox, self.outbound_loop(outbound_rx))
    }

    async fn outbound_loop(
        self,
        mut rx: tokio::sync::mpsc::UnboundedReceiver<OutboundMessage>,
    ) -> Result<(), Error> {
        log::trace!("Reporter/outbound_loop: Starting");
        let mut client = BenchmarkReportClient::new(self.channel.clone());
        let mut context = Context::new();
        let mut num_requests = 0;

        while !context.shutdown {
            if num_requests > 0 {
                tokio::time::delay_for(std::time::Duration::new(1, 0)).await; // TODO: more appropriate retry
            }
            num_requests += 1;
            let (inner_outbound_txi, inner_outbound_rx) = tokio::sync::mpsc::unbounded_channel();
            let mut inner_outbound_tx = Some(inner_outbound_txi);

            // Need at least single message to start receiving response
            log::trace!("Reporter/outbound_loop: Waiting for first data for new connection");
            self.outbound_process(&mut context, inner_outbound_tx.as_mut().unwrap(), rx.recv().await).await;
            if context.shutdown {
                //XXX:
                log::info!("Reporter/outbound_loop: reporter is shut down while waiting for first data for new connection");
                break;
            }

            log::info!("Reporter/outbound_loop: Opening");
            let mut closed = false;

            let response = match tokio::time::timeout(
                std::time::Duration::new(15, 0),
                client.report_benchmark_result(tonic::Request::new(inner_outbound_rx)),
            )
            .await
            {
                Ok(Ok(r)) => r,
                Ok(Err(e)) => {
                    log::error!("Reporter/outbound_loop: Open err: {:?}", e);
                    continue;
                }
                Err(e) => {
                    log::error!("Reporter/outbound_loop: Open err: {:?}", e);
                    continue;
                }
            };
            log::trace!("Reporter/outbound_loop: Opened");

            let (inbound_shutdown_tx, inbound_shutdown_rx) = tokio::sync::mpsc::unbounded_channel();
            let inbound_loop = self.inbound_loop(response, inbound_shutdown_rx);
            tokio::pin!(inbound_loop);

            while !closed {
                log::trace!("Reporter/outbound_loop: Connection loop");
                tokio::select! {
                    _in_msg = &mut inbound_loop => {
                        // error is considered transient and handled and displayed in inbound_loop
                        // if let Ok(last_acked_nonce) = in_msg {
                        //     self.inbound_finalize(&mut context, last_acked_nonce).await;
                        // }
                        closed = true;
                    },
                    ob_msg = rx.recv(), if inner_outbound_tx.is_some() => {
                        self.outbound_process(&mut context, inner_outbound_tx.as_mut().unwrap(), ob_msg).await;
                        if context.shutdown {
                            rx.close();
                            drop(inner_outbound_tx.take());
                            inbound_shutdown_tx.send(()).unwrap();
                        }
                    },
                }
            }
            log::trace!("Reporter/outbound_loop: Outbound loop continue...");
        }

        log::info!("Reporter/outbound_loop: Leaving");

        Ok(())
    }

    async fn inbound_loop(
        &self,
        response: tonic::Response<tonic::Streaming<ReportBenchmarkResultResponse>>,
        mut shutdown_rx: tokio::sync::mpsc::UnboundedReceiver<()>,
    ) -> Result<i64, tonic::Status> {
        let mut rx = response.into_inner();
        let mut last_acked_nonce = -1;
        let mut shutdown = false;

        log::trace!("Reporter/inbound_loop: Start");
        while !shutdown {
            tokio::select! {
                in_msg = rx.message() => {
                    match in_msg {
                        Ok(Some(res)) => {
                            log::info!("Reporter/inbound_loop/response: {:?}", res);
                            last_acked_nonce = res.acked_nonce;
                        },
                        Ok(None) => {
                            log::trace!("Reporter/inbound_loop/ok-none:");
                            shutdown = true;
                        },
                        Err(err) => {
                            log::error!("Reporter/inbound_loop/error: ERR {:?}", err);
                            return Err(err);
                        },
                    }
                },
                _shutdown = shutdown_rx.recv() => {
                    shutdown = true;
                    log::trace!("Reporter/inbound_loop: Shutdown");
                }
            }
        }
        log::trace!("Reporter/inbound_loop: Nominal Leaving");
        Ok(last_acked_nonce)
    }

    // FIXME: https://github.com/rust-lang/rust/issues/63033
    //        async fn inbound_finalize(&self, context: &mut Context, in_msg: Result<i64, Box<dyn std::error::Error>>) {
    // async fn inbound_finalize(&self, context: &mut Context, last_acked_nonce: i64) {
    // }

    async fn outbound_process(
        &self,
        context: &mut Context,
        inner_outbound_tx: &mut tokio::sync::mpsc::UnboundedSender<ReportBenchmarkResultRequest>,
        ob_msg: Option<OutboundMessage>,
    ) {
        match ob_msg {
            Some(OutboundMessage::Report(report)) => {
                log::trace!("Reporter/outbound_loop/OutboundMessage: Sending {:?}", report);

                let mut result = report.result;

                result.finished = false;
                result.execution = None;

                let req = ReportBenchmarkResultRequest {
                    job_id: self.job_handle.job_id,
                    handle: self.job_handle.handle.clone(),
                    nonce: context.next_nonce(),
                    result: Some(result.clone()),
                };

                log::info!("Reporter/outbound_loop/ReportBenchmarkResultRequest:  req={:?}", req.clone());
                log::trace!("Reporter/outbound_loop/outbound_process: Enqueue...");
                inner_outbound_tx.send(req).unwrap(); // TODO: unwrap is unsuitable
                log::trace!("Reporter/outbound_loop/outbound_process: Enqueued");
            }
            Some(OutboundMessage::Shutdown) => {
                log::info!("Reporter/outbound_loop/Shutdown");
                context.shutdown = true;
            }
            None => {}
        }
    }
}
