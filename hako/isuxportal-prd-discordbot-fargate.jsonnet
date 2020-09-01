local utils = import 'lib/utils.libsonnet';
local front = import 'lib/front.libsonnet';

local base = import './isuxportal-prd-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 1,
    deployment_configuration: {
      minimum_healthy_percent: 0,
      maximum_percent: 100,
    },
    capacity_provider_strategy: [
      { capacity_provider: 'FARGATE_SPOT', weight: 1 },
    ],
  },
  app+: {
    cpu: 256 - 64,
    memory: 512 - 128,
    command: ['bundle', 'exec', './bin/isuxportal-discord-bot'],
  },
  additional_containers: {
  },
  volumes: {
  },
}
