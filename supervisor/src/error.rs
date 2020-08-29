#[derive(thiserror::Error, Debug)]
pub enum Error {
    #[error(transparent)]
    RequestFailure(#[from] tonic::Status),

    #[error("Final report was not acknowledged")]
    NotAcknowledged,

    #[error(transparent)]
    DecodeError(#[from] prost::DecodeError),

    #[error(transparent)]
    IoError(#[from] std::io::Error),
}
