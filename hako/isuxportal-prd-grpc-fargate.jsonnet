local utils = import 'lib/utils.libsonnet';
local frontEnvoy = import 'lib/front-envoy.libsonnet';

local base = import './isuxportal-prd-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 1,
    elb_v2: utils.grpcNlbInternetFacing {
      protocol: 'TLS',
    },
    capacity_provider_strategy: [
      { capacity_provider: 'FARGATE_SPOT', weight: 1 },
    ],
  },
  app+: {
    command: ['bundle', 'exec', 'rails', 'runner', 'Griffin::Server.run(port: 4000)'],
    env+: {
      GRIFFIN_POOL_MIN: '10',
      GRIFFIN_POOL_MAX: '30',
      GRIFFIN_CONNECTION_MIN: '2',
      GRIFFIN_CONNECTION_MAX: '8',
      THREADS_NUM: '40',
    }
  },
  additional_containers: {
    front: frontEnvoy.container('isuxportal-prd-grpc-fargate', '4000'),
  },
  volumes: {
  },
  scripts+: [
  ],
}
