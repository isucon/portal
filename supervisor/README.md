# Supervisor: Benchmarker Supervisor

## Release Build

```
cargo build --release --bin isuxportal-supervisor
```

or download an artifact of release build binary for Ubuntu 18.04 on GitHub Actions: https://github.com/isucon/isucon10-portal/actions?query=workflow%3Asupervisor

## example systemd unit

```systemd
[Unit]
Description=isuxportal-supervisor
After=network.target

[Service]
User=isucon
ExecStart=/usr/bin/isuxportal-supervisor /path/to/your/benchmarker and its options
LogsDirectory=isuxportal-supervisor

Environment=ISUXPORTAL_SUPERVISOR_ENDPOINT_URL=https://portal-grpc-dev.x.isucon.dev
#Environment=ISUXPORTAL_SUPERVISOR_ENDPOINT_URL=https://portal-grpc-prd.x.isucon.dev
Environment=ISUXPORTAL_SUPERVISOR_TOKEN=himitsu
Environment=ISUXPORTAL_SUPERVISOR_TEAM_ID=12345
Environment=ISUXPORTAL_SUPERVISOR_INSTANCE_NAME=%H
Environment=ISUXPORTAL_SUPERVISOR_HARD_TIMEOUT=70
Environment=ISUXPORTAL_SUPERVISOR_LOG_DIRECTORY=/var/log/isuxportal-supervisor
Environment=ISUXPORTAL_SUPERVISOR_INTERVAL_AFTER_EMPTY_RECEIVE=2

[Install]
WantedBy=multi-user.target
```


