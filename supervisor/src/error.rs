#[derive(thiserror::Error, Debug)]
pub enum Error {
    #[error(transparent)]
    RequestFailure(#[from] tonic::Status),

    #[error("Final report was not acknowledged")]
    NotAcknowledged,

    #[error("the benchmarker process wasn't successfully completed")]
    UnsuccessfulRun,

    #[error(transparent)]
    DecodeError(#[from] prost::DecodeError),

    #[error(transparent)]
    IoError(#[from] std::io::Error),

    #[error("[BUG] Reporter unexpectedly went down")]
    UnexpectedReporterShutdown,

    #[error("benchmarker exceeded deadline")]
    BenchmarkerExceededDeadline,
}
