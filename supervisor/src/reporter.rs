use crate::api::isuxportal::proto::resources::BenchmarkResult;
use crate::api::isuxportal::proto::services::bench::receive_benchmark_job_response::JobHandle;
use crate::api::isuxportal::proto::services::bench::ReportBenchmarkResultRequest;
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
    client: crate::api::Client,
}

impl Reporter {
    pub fn new(client: crate::api::Client, job_handle: JobHandle) -> Self {
        Self { job_handle, client }
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
        loop {
            match rx.recv().await {
                Some(OutboundMessage::Report(report)) => {
                    log::trace!("Reporter/outbound_loop/OutboundMessage: Sending {:?}", report);

                    let mut result = report.result;

                    result.finished = false;
                    result.execution = None;

                    let req = ReportBenchmarkResultRequest {
                        job_id: self.job_handle.job_id,
                        handle: self.job_handle.handle.clone(),
                        nonce: 0,
                        result: Some(result.clone()),
                    };

                    log::info!("Reporter/outbound_loop/ReportBenchmarkResultRequest:  req={:?}", req.clone());

                    match self.client.report_benchmark_result(&req).await {
                        Ok(_) => {}
                        Err(e) => {
                            log::error!("Reporter/outbound_loop/ReportBenchmarkResultRequest:  error={:?}", e)
                        }
                    }
                }
                Some(OutboundMessage::Shutdown) => {
                    log::info!("Reporter/outbound_loop/Shutdown");
                    break;
                }
                None => {}
            }
        }

        log::info!("Reporter/outbound_loop: Leaving");
        Ok(())
    }
}
