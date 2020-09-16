#!/bin/bash -e
go build -o /tmp/isuxportal-reporter-testcli github.com/isucon/isucon10-portal/bench-tool.go/testcli
export ISUXPORTAL_SUPERVISOR_INSTANCE_NAME=localhost
export ISUXPORTAL_SUPERVISOR_ENDPOINT_URL=http://localhost:4000
export ISUXPORTAL_SUPERVISOR_TOKEN=token
export RUST_LOG=${RUST_LOG:-"info,isuxportal_supervisor=trace"}
exec cargo run --bin isuxportal-supervisor /tmp/isuxportal-reporter-testcli "$@"
