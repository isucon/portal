local front = import 'lib/front.libsonnet';
local utils = import 'lib/utils.libsonnet';

local base = import './isuxportal-prd-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 3,
    cpu: '512',
    memory: '1024',
    elb_v2: utils.albInternetFacing,
    capacity_provider_strategy: [
      { capacity_provider: 'FARGATE_SPOT', weight: 1 },
    ],
    autoscaling: {
      role_arn: 'arn:aws:iam::245943874622:role/ecsAutoscaleRole',
      min_capacity: 3,
      max_capacity: 20,
      policies: [
        {
          policy_type: 'TargetTrackingScaling',
          name: 'ecs-target-tracking-scaling-isuxportal-prd-fargate',
          target_value: 60,
          predefined_metric_type: 'ECSServiceAverageCPUUtilization',
          scale_out_cooldown: 300,
          scale_in_cooldown: 300,
        },
      ],
    },
  },
  app+: {
    cpu: 512 - 64,
    memory: 1024 - 32,
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
        },
      },
    },
  ],
}
