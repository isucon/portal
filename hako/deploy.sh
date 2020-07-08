#!/bin/bash -xe
e=$1
bundle exec hako deploy --tag github isuxportal-${e}-fargate.jsonnet &
bundle exec hako deploy --tag github isuxportal-${e}-sidekiq-fargate.jsonnet &
bundle exec hako deploy --tag github isuxportal-${e}-discordbot-fargate.jsonnet &

wait
