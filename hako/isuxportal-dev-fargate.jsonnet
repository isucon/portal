local utils = import 'lib/utils.libsonnet';
local front = import 'lib/front.libsonnet';

local base = import './isuxportal-dev-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 1,
    elb_v2: utils.albInternetFacing,
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
        }
      }
    },
  ],
}
