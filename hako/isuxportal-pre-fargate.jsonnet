local front = import 'lib/front.libsonnet';
local utils = import 'lib/utils.libsonnet';

local base = import './isuxportal-pre-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 2,
    cpu: '512',
    memory: '1024',
    elb_v2: utils.albInternetFacing,
  },
  app+: {
    cpu: 512 - 64,
    memory: 1024 - 32,
  },
  additional_containers: {
    front: front.container,
  },
  volumes: {
  },
  scripts+: [
    front.script.default {
      backend_host: 'localhost',
      backend_port: '3000',
      locations+: {
        '/packs/manifest.json': {
          allow_only_from: ['127.0.0.1/32'],
        },
      },
    },
  ],
}
