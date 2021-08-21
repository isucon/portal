local front = import 'lib/front.libsonnet';
local utils = import 'lib/utils.libsonnet';

local base = import './isuxportal-prd-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 50,
    capacity_provider_strategy: [
      { capacity_provider: 'FARGATE_SPOT', weight: 1 },
    ],
  },
  app+: {
    cpu: 256,
    memory: 512,
    command: ['bundle', 'exec', 'shoryuken', 'start', '-R', '-C', '/app/config/shoryuken.yml'],
    env+: {
      ISUXPORTAL_SHORYUKEN_CONCURRENCY: '2',
    },
  },
  additional_containers: {
  },
  volumes: {
  },
}
