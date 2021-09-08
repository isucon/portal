local front = import 'lib/front.libsonnet';
local utils = import 'lib/utils.libsonnet';

local base = import './isuxportal-dev-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 1,
    env+: {
      ISUXPORTAL_SHORYUKEN_CONCURRENCY: '5',
    },
    autoscaling: {
      role_arn: 'arn:aws:iam::245943874622:role/ecsAutoscaleRole',
      min_capacity: 1,
      max_capacity: 4,
      policies: [
        {
          alarms: ['ecs-scaling-out-worker-autoscaling-service-dev'],
          cooldown: 300,
          adjustment_type: 'ChangeInCapacity',
          scaling_adjustment: 1,
          metric_interval_lower_bound: 20,
          metric_aggregation_type: 'Average',
        },
        {
          alarms: ['ecs-scaling-in-worker-autoscaling-service-dev'],
          cooldown: 300,
          adjustment_type: 'ChangeInCapacity',
          scaling_adjustment: -1,
          metric_interval_upper_bound: 20,
          metric_aggregation_type: 'Average',
        },
      ]
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
