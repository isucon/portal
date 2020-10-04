local utils = import 'lib/utils.libsonnet';
local front = import 'lib/front.libsonnet';

local base = import './isuxportal-prd-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 2,
    elb_v2: utils.albInternetFacing,
    capacity_provider_strategy: [
      { capacity_provider: 'FARGATE_SPOT', weight: 1 },
    ],
  },
  app+: {
    env+: {
      RACK_TIMEOUT_SERVICE_TIMEOUT: '8',
      WORKER_NUM: '1',
      THREADS_NUM: '3',
    },
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
