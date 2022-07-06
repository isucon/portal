pub mod isuxportal {
    pub mod proto {
        include!(concat!(env!("OUT_DIR"), "/isuxportal.proto.rs"));
        pub mod services {
            pub mod bench {
                include!(concat!(env!("OUT_DIR"), "/isuxportal.proto.services.bench.rs"));
            }
        }
        pub mod resources {
            include!(concat!(env!("OUT_DIR"), "/isuxportal.proto.resources.rs"));
        }
    }
}

use isuxportal::proto::services::bench::*;

#[derive(Clone)]
pub struct Client {
    base_url: reqwest::Url,
    http: reqwest::Client,
}

impl Client {
    pub fn new(base_url: reqwest::Url) -> Self {
        let http = reqwest::Client::builder().build().expect("failed to build reqwest client");
        Self { base_url, http }
    }

    pub async fn receive_benchmark_job(
        &self,
        input: &ReceiveBenchmarkJobRequest,
    ) -> Result<ReceiveBenchmarkJobResponse, Error> {
        let req = encode_pb(self.http.post(self.base_url.join("/api/bench/receive").unwrap()), input)?;

        decode_pb(self.http.execute(req).await?).await
    }

    pub async fn cancel_owned_benchmark_job(
        &self,
        input: &CancelOwnedBenchmarkJobRequest,
    ) -> Result<CancelOwnedBenchmarkJobResponse, Error> {
        let req = encode_pb(self.http.post(self.base_url.join("/api/bench/cancel_owned").unwrap()), input)?;

        decode_pb(self.http.execute(req).await?).await
    }

    pub async fn report_benchmark_result(
        &self,
        input: &ReportBenchmarkResultRequest,
    ) -> Result<ReportBenchmarkResultResponse, Error> {
        let req =
            encode_pb(self.http.post(self.base_url.join("/api/bench/benchmark_results").unwrap()), input)?;

        decode_pb(self.http.execute(req).await?).await
    }

    pub async fn complete_benchmark_job(
        &self,
        input: &CompleteBenchmarkJobRequest,
    ) -> Result<CompleteBenchmarkJobResponse, Error> {
        let req = encode_pb(
            self.http.post(self.base_url.join("/api/bench/benchmark_results/completion").unwrap()),
            input,
        )?;

        decode_pb(self.http.execute(req).await?).await
    }
}

#[derive(thiserror::Error, Debug)]
pub enum Error {
    #[error(transparent)]
    ReqwestError(#[from] reqwest::Error),

    #[error(transparent)]
    DecodeError(#[from] prost::DecodeError),

    #[error("ClientError")]
    ClientError(#[source] reqwest::Error, isuxportal::proto::Error),

    #[error("ServerError")]
    ServerError(#[source] reqwest::Error, isuxportal::proto::Error),

    #[error("{0}")]
    UnknownError(String),

    #[error("timed out")]
    TimeoutError,
}

fn encode_pb<T: prost::Message + Default>(
    builder: reqwest::RequestBuilder,
    payload: &T,
) -> Result<reqwest::Request, Error> {
    Ok(builder
        .header("content-type", "application/vnd.google.protobuf")
        .header("accept", "application/protobuf, application/vnd.google.protobuf, text/plain")
        .body(payload.encode_to_vec())
        .build()?)
}

async fn decode_pb<T: prost::Message + Default>(response: reqwest::Response) -> Result<T, Error> {
    use prost::Message as _;

    if response.status().is_success() {
        Ok(T::decode(response.bytes().await?)?)
    } else if response.status().is_client_error() || response.status().is_server_error() {
        let status = response.status();
        let err = response.error_for_status_ref().err();
        let is_pb = response
            .headers()
            .get("content-type")
            .and_then(|x| x.to_str().ok())
            .map(|v| v.contains("protobuf"))
            .unwrap_or(false);
        let msg = if is_pb {
            isuxportal::proto::Error::decode(response.bytes().await?).unwrap_or_else(|_| {
                isuxportal::proto::Error {
                    code: status.as_u16().into(),
                    name: "unknown".to_owned(),
                    ..isuxportal::proto::Error::default()
                }
            })
        } else {
            isuxportal::proto::Error {
                code: status.as_u16().into(),
                name: "unknown".to_owned(),
                human_message: response.text().await.unwrap_or_else(|_| "".to_owned()),
                ..isuxportal::proto::Error::default()
            }
        };

        // error_for_status should return something as we asserted a response is 4xx or 5xx
        if status.is_server_error() {
            Err(Error::ServerError(err.unwrap(), msg))
        } else {
            Err(Error::ClientError(err.unwrap(), msg))
        }
    } else {
        Err(Error::UnknownError(format!("unknown response code {:?}", response.status())))
    }
}
