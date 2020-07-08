local utils = import 'lib/utils.libsonnet';
local front = import 'lib/front.libsonnet';

local base = import './isuxportal-prd-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 2,
  },
  app+: {
    command: ['bundle', 'exec', 'sidekiq', '-t', '5', '-c', '2', '-q', 'default', '-q', 'mailers'],
  },
  additional_containers: {
  },
  volumes: {
  },
}
