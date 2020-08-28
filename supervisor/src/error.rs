#[derive(thiserror::Error, Debug)]
pub enum Error {
    #[error(transparent)]
    RequestFailure(#[from] tonic::Status),

    #[error("Final report was not acknowledged")]
    NotAcknowledged,
}
