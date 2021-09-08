local front = import 'lib/front.libsonnet';
local utils = import 'lib/utils.libsonnet';

local base = import './isuxportal-prd-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 2,
    capacity_provider_strategy: [
      { capacity_provider: 'FARGATE_SPOT', weight: 1 },
    ],
    autoscaling: {
      role_arn: 'arn:aws:iam::245943874622:role/ecsAutoscaleRole',
      min_capacity: 1,
      max_capacity: 4,
      policies: [
        {
          alarms: ['ecs-scaling-out-worker-autoscaling-service-prd'],
          cooldown: 300,
          adjustment_type: 'ChangeInCapacity',
          scaling_adjustment: 1,
          metric_interval_lower_bound: 0,
          metric_aggregation_type: 'Average',
        },
        {
          alarms: ['ecs-scaling-in-worker-autoscaling-service-prd'],
          cooldown: 300,
          adjustment_type: 'ChangeInCapacity',
          scaling_adjustment: -1,
          metric_interval_upper_bound: 0,
          metric_aggregation_type: 'Average',
        },
      ]
    },
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
