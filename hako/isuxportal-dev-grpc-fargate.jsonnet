local utils = import 'lib/utils.libsonnet';
local frontEnvoy = import 'lib/front-envoy.libsonnet';

local base = import './isuxportal-dev-base.libsonnet';

base {
  scheduler+: utils.ecsSchedulerFargate {
    desired_count: 1,
    elb_v2: utils.grpcNlbInternetFacing {
      protocol: 'TLS',
    },
  },
  app+: {
    command: ['bundle', 'exec', 'rails', 'runner', 'Griffin::Server.run(port: 4000)'],
    env+: {
      GRIFFIN_POOL_MIN: '10',
      GRIFFIN_POOL_MAX: '20',
      GRIFFIN_CONNECTION_MIN: '2',
      GRIFFIN_CONNECTION_MAX: '8',
      THREADS_NUM: '20',
    }
  },
  additional_containers: {
    front: frontEnvoy.container('isuxportal-dev-grpc-fargate', '4000') {
      env+: {
        HTTP2_MAX_CONCURRENT_STREAMS: '20',
      },
    },
  },
  volumes: {
  },
  scripts+: [
  ],
}
