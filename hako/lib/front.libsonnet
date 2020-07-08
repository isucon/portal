local utils = import './utils.libsonnet';

{
  container: {
    cpu: 64,
    memory: 32,
    image_tag: 'sorah/infra-hako-front:ba829a495abb7acf3d4f5d13cef5c952910aba63',
    log_configuration: utils.awsLogs('front'),
  },
  script: {
    local default = {
      type: 'nginx_front',
      s3: {
        region: 'ap-northeast-1',
        bucket: 'isucon10-misc',
        prefix: 'hako/nginx-config',
      },
    },
    default: default {
      locations: {
        '/': {
          https_type: 'always',
        },
      },
    },
  },
}
