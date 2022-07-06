use isuxportal_supervisor::api;
use isuxportal_supervisor::config::Config;
use isuxportal_supervisor::worker::Worker;

fn main() {
    env_logger::from_env(env_logger::Env::default().default_filter_or("info")).init();

    let config = envy::prefixed("ISUXPORTAL_SUPERVISOR_").from_env::<Config>().unwrap();

    let mut args = std::env::args().skip(1);
    let command_exec = args.next().expect("must have 1 arguments");
    let command_args = args.collect();

    log::info!("Config: {:?}", config);
    log::info!("Command: {:?}, {:?}", command_exec, command_args);

    run(config, command_exec, command_args);
}

#[tokio::main]
async fn run(config: Config, command_exec: String, command_args: Vec<String>) {
    let client = api::Client::new(reqwest::Url::parse(&config.endpoint_url).unwrap());

    tokio::time::timeout(
        std::time::Duration::new(15, 0),
        client.cancel_owned_benchmark_job(
            &api::isuxportal::proto::services::bench::CancelOwnedBenchmarkJobRequest {
                token: config.token.clone(),
                instance_name: config.instance_name.clone(),
            },
        ),
    )
    .await
    .expect("CancelOwnedBenchmarkJob timed out")
    .expect("CancelOwnedBenchmarkJob failed");

    let (shutdown_tx, mut shutdown_rx) = tokio::sync::oneshot::channel();
    tokio::spawn(async {
        let mut sigterm = tokio::signal::unix::signal(tokio::signal::unix::SignalKind::terminate())
            .expect("cannot handle signals");
        sigterm.recv().await;
        log::info!("received sigterm");
        shutdown_tx.send(()).unwrap();
    });

    loop {
        if shutdown_rx.try_recv().is_ok() {
            break;
        }
        let job_req = api::isuxportal::proto::services::bench::ReceiveBenchmarkJobRequest {
            token: config.token.clone(),
            instance_name: config.instance_name.clone(),
            team_id: config.team_id.unwrap_or(0),
        };
        log::info!("ReceiveBenchmarkJob(Request): {:?}", job_req);

        match tokio::time::timeout(std::time::Duration::new(15, 0), client.receive_benchmark_job(&job_req))
            .await
        {
            Ok(Ok(job_resp)) => {
                log::info!("ReceiveBenchmarkJob(Response): {:?}", job_resp);
                match job_resp.job_handle {
                    Some(job) => {
                        log::trace!("job {:?}", job);
                        let worker = Worker::new(job, &config, command_exec.clone(), command_args.clone());
                        worker.perform(client.clone()).await.unwrap();
                    }
                    None => {
                        tokio::time::sleep(std::time::Duration::new(config.interval_after_empty_receive, 0))
                            .await;
                    }
                }
            }
            Ok(Err(err)) => {
                log::error!("ReceiveBenchmarkJob(Error): {:?}", err);
                if shutdown_rx.try_recv().is_ok() {
                    break;
                }
                tokio::time::sleep(std::time::Duration::new(config.interval_after_empty_receive, 0)).await;
            }
            Err(_) => {
                log::error!("ReceiveBenchmarkJob(Error): Timed out");
                panic!("ReceiveBenchmarkJob Timed out");
            }
        }
    }
    log::info!("bye bye!");
}
