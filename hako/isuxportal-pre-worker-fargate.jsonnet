local front = import 'lib/front.libsonnet';
local utils = import 'lib/utils.libsonnet';

local base = import './isuxportal-pre-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 3,
    env+: {
      ISUXPORTAL_SHORYUKEN_CONCURRENCY: '5',
    },
  },
  app+: {
    command: ['bundle', 'exec', 'shoryuken', 'start', '-R', '-C', '/app/config/shoryuken.yml'],
  },
  additional_containers: {
  },
  volumes: {
  },
}
