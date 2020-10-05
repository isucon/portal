local utils = import 'lib/utils.libsonnet';
local front = import 'public/lib/front.libsonnet';
local secret = utils.makeSecretParameterStore('isuxportal-prd');

{
  scheduler: {
    task_role_arn: utils.iamRole('Isuxportal'),
  },
  app: {
    image: utils.ecrRepository('isuxportal'),
    //cpu: 512 - 64,
    //memory: 1024 - 128,
    cpu: 256 - 64,
    memory: 512 - 128,
    env: {
      AWS_REGION: 'ap-northeast-1',
      RACK_ENV: 'production',
      RAILS_ENV: 'production',
      DATABASE_URL: 'mysql2://isuxportal@isuxportal-prd.cluster-cunslsivoetj.ap-northeast-1.rds.amazonaws.com/isuxportal?encoding=utf8mb4&charset=utf8mb4&collation=utf8mb4_general_ci',
      REDIS_URL: 'redis://isuxportal-prd.roqymc.ng.0001.apne1.cache.amazonaws.com:6379/0',
      SENTRY_DSN: 'https://89064bffbbde4a9c96fdbeaf68fc6664@o417264.ingest.sentry.io/5316249',
      RAILS_LOG_TO_STDOUT: '1',
      RAILS_SERVE_STATIC_FILES: '1',
      RAILS_SERVE_STATIC_FILES_CC: 'public, max-age=31536000',
      DEFAULT_URL_HOST: 'portal.isucon.net',
      ISUXPORTAL_FINAL: '1',
      ISUXPORTAL_DISCORD_SERVER_ID: '729982721924792320', 
      ISUXPORTAL_DISCORD_CHANNEL_ID: '729982722138963992', // final-announcements
      ISUXPORTAL_DISCORD_ADMIN_ROLE_ID: '729982721924792329',
      ISUXPORTAL_DISCORD_CONTESTANT_ROLE_ID: '729982721924792323',
      ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE_ID: '729982721924792322',
      ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE: '1',
      ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE_ID: '729982721924792321',
      ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE: '1',
      ISUXPORTAL_DISCORD_SUPPORT_COMM_CHANNEL_ROLES: '729982722138963995=729982721924792326,729982722138963996=729982721924792325,729982722138963997=729982721924792324',
      ISUXPORTAL_TIMING_REGISTRATION_OPEN: '2020-08-31T09:00:00Z',
      ISUXPORTAL_TIMING_REGISTRATION_CLOSE: '2020-08-31T09:00:00Z',
      ISUXPORTAL_TIMING_REGISTRATION_INVITATION_CLOSE: '2020-08-31T09:00:00Z',
      ISUXPORTAL_TIMING_REGISTRATION_UPDATE_CLOSE: '2020-09-12T01:00:00Z',
      ISUXPORTAL_TIMING_CONTEST_START: '2020-10-03T01:00:00Z',
      ISUXPORTAL_TIMING_CONTEST_FREEZE: '2020-10-12T00:45:00Z',
      ISUXPORTAL_TIMING_CONTEST_END: '2020-10-12T01:00:00Z',
      ISUXPORTAL_SHORYUKEN_QUEUE: 'isuxportal-activejob-prd',
      ISUXPORTAL_DOCS_URL: 'https://hackmd.io/VD78z8syR16OTO25OtzW2A',
    },
    secrets: [
      secret('SECRET_KEY_BASE'),
      secret('DATABASE_PASSWORD'),
      secret('NEW_RELIC_LICENSE_KEY'),
      secret('ISUXPORTAL_SLACK_WEBHOOK_URL'),
      secret('ISUXPORTAL_GITHUB_CLIENT_ID'),
      secret('ISUXPORTAL_GITHUB_CLIENT_SECRET'),
      secret('ISUXPORTAL_DISCORD_CLIENT_ID'),
      secret('ISUXPORTAL_DISCORD_CLIENT_SECRET'),
      secret('ISUXPORTAL_DISCORD_BOT_TOKEN'),
      secret('ISUXPORTAL_ADMIN_LOGIN'),
      secret('ISUXPORTAL_ADMIN_PASSWORD'),
      secret('ISUXPORTAL_BYPASS_SECRET'),
      secret('ISUXPORTAL_SSH_KEY_API_SECRET'),
      secret('ISUXPORTAL_BENCH_TOKEN'),
      secret('ISUXPORTAL_DCIM_TOKEN'),
      secret('ISUXPORTAL_VAPID_PRIVATE_KEY'),
    ],
    mount_points: [
    ],
    log_configuration: utils.awsLogs('app'),
  },
  volumes: {
  },
  scripts: [
    utils.githubTag('isucon/isucon10-portal') {
      checks: ['portal-build'],
    },
    utils.createLogGroups(),
  ],
}
