#!/bin/bash
set -x

while true; do
  sleep $(( RANDOM % 15 ))
  /usr/local/bin/isucon-env-checker boot && exit 0
done
