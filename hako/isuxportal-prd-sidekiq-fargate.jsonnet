local utils = import 'lib/utils.libsonnet';
local front = import 'lib/front.libsonnet';

local base = import './isuxportal-prd-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 1,
    capacity_provider_strategy: [
      { capacity_provider: 'FARGATE_SPOT', weight: 1 },
    ],
  },
  app+: {
    cpu: 256 - 64,
    memory: 512 - 128,
    command: ['bundle', 'exec', 'sidekiq', '-t', '5', '-c', '2', '-q', 'default', '-q', 'mailers'],
  },
  additional_containers: {
  },
  volumes: {
  },
}
