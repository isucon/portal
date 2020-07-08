local utils = import 'lib/utils.libsonnet';
local front = import 'lib/front.libsonnet';

local base = import './isuxportal-dev-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 1,
  },
  app+: {
    command: ['bundle', 'exec', './bin/isuxportal-discord-bot'],
  },
  additional_containers: {
  },
  volumes: {
  },
}
