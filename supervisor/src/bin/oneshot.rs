use isuxportal_supervisor::api::isuxportal::proto::resources::BenchmarkResult;
use isuxportal_supervisor::config::Config;
use isuxportal_supervisor::process::Process;

fn main() {
    env_logger::from_env(env_logger::Env::default().default_filter_or("info")).init();

    std::env::set_var("ISUXPORTAL_SUPERVISOR_ENDPOINT_URL", "http://dummy.invalid");
    std::env::set_var("ISUXPORTAL_SUPERVISOR_TOKEN", "himitsudamon");
    let config = envy::prefixed("ISUXPORTAL_SUPERVISOR_").from_env::<Config>().unwrap();

    let mut args = std::env::args().skip(1);
    let command_exec = args.next().expect("must have 1 arguments");
    let command_args = args.collect();

    log::info!("One-shot!");
    log::info!("Config: {:#?}", config);
    log::info!("Command: {:#?}, {:#?}", command_exec, command_args);

    run(config, command_exec, command_args);
}

#[tokio::main]
async fn run(config: Config, command_exec: String, command_args: Vec<String>) {
    use isuxportal_supervisor::process::Message;

    let process = Process {
        exec: command_exec,
        args: command_args,
        stdout_path: format!("/tmp/isuxbench-oneshot-{}.out.log", std::process::id()),
        stderr_path: format!("/tmp/isuxbench-oneshot-{}.err.log", std::process::id()),
        target_address: std::env::var("ISUXBENCH_TARGET").expect("Specify $ISUXBENCH_TARGET"),
    };
    let mut handle = process.spawn().await.unwrap();
    let mut deadline = tokio::time::delay_for(std::time::Duration::from_secs(config.hard_timeout));

    loop {
        log::trace!("loop");
        tokio::select! {
            _ = &mut deadline => {
                log::warn!("Deadline");
                handle.kill().unwrap();
            },
            message = handle.message::<BenchmarkResult>() => match message {
                Some(Message::Data(m)) => {
                    log::info!("Data: {:#?}", m);
                },
                Some(Message::DataFinished) => {
                    log::info!("Data finished");
                },
                Some(Message::ProcessExit(exit_status)) => {
                    log::info!("Exit Status: {:#?}", exit_status);
                },
                Some(Message::Error(e)) => {
                    log::error!("Error: {:#?}", e);
                },
                None => break,
            },
        }
    }
}
