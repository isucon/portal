use isuxportal_supervisor::api;
use isuxportal_supervisor::config::Config;
use isuxportal_supervisor::worker::Worker;

fn main() {
    env_logger::from_env(env_logger::Env::default().default_filter_or("info")).init();

    let config = envy::prefixed("ISUXPORTAL_SUPERVISOR_")
        .from_env::<Config>()
        .unwrap();

    let mut args = std::env::args().skip(1);
    let command_exec = args.next().expect("must have 1 arguments");
    let command_args = args.collect();

    log::info!("Config: {:#?}", config);
    log::info!("Command: {:#?}, {:#?}", command_exec, command_args);

    run(config, command_exec, command_args);
}

#[tokio::main]
async fn run(config: Config, command_exec: String, command_args: Vec<String>) {
    let mut channel_build =
        tonic::transport::Channel::from_shared(config.endpoint_url.clone()).unwrap();
    if config.endpoint_url.starts_with("https://") {
        channel_build = channel_build
            .tls_config(tonic::transport::ClientTlsConfig::new())
            .unwrap();
    }

    let channel = channel_build.connect().await.unwrap();
    // let channel = channel_build.connect_lazy().unwrap();

    let mut queue_client =
        api::isuxportal::proto::services::bench::benchmark_queue_client::BenchmarkQueueClient::new(
            channel.clone(),
        );

    loop {
        let job_req = tonic::Request::new(
            api::isuxportal::proto::services::bench::ReceiveBenchmarkJobRequest {
                token: config.token.clone(),
                instance_name: config.instance_name.clone(),
                team_id: config.team_id.unwrap_or(0),
            },
        );
        log::debug!("ReceiveBenchmarkJob(Request): {:#?}", job_req);

        match queue_client.receive_benchmark_job(job_req).await {
            Ok(resp) => {
                log::info!("ReceiveBenchmarkJob(Response): {:#?}", resp);
                let job_resp = resp.into_inner();
                match job_resp.job_handle {
                    Some(job) => {
                        log::info!("job {:#?}", job);
                        let worker = Worker::new(job, &config, command_exec.clone(), command_args.clone());
                        match worker.perform(channel.clone()).await {
                            Ok(_) => {
                                log::info!("OK");
                            }
                            Err(err) => {
                                log::error!("Err {:#?}", err);
                            }
                        }
                    },
                    None => {
                        tokio::time::delay_for(std::time::Duration::new(config.interval_after_empty_receive, 0)).await;
                    }
                }
            }
            Err(err) => {
                log::error!("ReceiveBenchmarkJob(Error): {:#?}", err);
                tokio::time::delay_for(std::time::Duration::new(config.interval_after_empty_receive, 0)).await;
            }
        }
    }
}
