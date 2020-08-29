#!/bin/bash
go build -o /tmp/isuxportal-reporter-testcli github.com/isucon/isucon10-portal/bench-tool.go/testcli
export ISUXBENCH_TARGET=https://dummy.invalid
export RUST_LOG=${RUST_LOG:-"info,isuxportal_supervisor=trace"}
exec cargo run --bin oneshot /tmp/isuxportal-reporter-testcli "$@"
