local utils = import './utils.libsonnet';

{
  container(appId, appPort='4000'): {
    cpu: 64,
    memory: 64,
    //image_tag: 'sorah/infra-hako-front-envoy:f8f077a6c0d70061b7ceb658192a42c82c4182f0',
    image_tag: '516315029474.dkr.ecr.ap-northeast-1.amazonaws.com/front-envoy:f8f077a6c0d70061b7ceb658192a42c82c4182f0',
    log_configuration: utils.awsLogs('front_envoy'),
    env: {
      APP_ID: appId,
      ADDRESS: '127.0.0.1',
      PORT: appPort,
      HTTP2: '1',
      TLS: '1',
      ENVOY_CONCURRENCY: '1',
    },
    port_mappings: [
      {
        container_port: '8000',
        host_port: 8000,
        protocol: 'tcp',
      },
    ],
  },
}
