local utils = import 'lib/utils.libsonnet';
local front = import 'lib/front.libsonnet';

local base = import './isuxportal-dev-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 1,
  },
  app+: {
    command: ['bundle', 'exec', 'sidekiq', '-t', '5', '-c', '2', '-q', 'default', '-q', 'mailers'],
  },
  additional_containers: {
  },
  volumes: {
  },
}
