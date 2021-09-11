local utils = import 'lib/utils.libsonnet';
local front = import 'public/lib/front.libsonnet';
local secret = utils.makeSecretParameterStore('isuxportal-prd');

{
  scheduler: {
    task_role_arn: utils.iamRole('IsuxportalPrd'),
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
      DATABASE_URL: 'mysql2://isuxportal@isuxportal-prd.cluster-cwda4z5vn03a.ap-northeast-1.rds.amazonaws.com/isuxportal?encoding=utf8mb4&charset=utf8mb4&collation=utf8mb4_general_ci',
      REDIS_URL: 'redis://isuxportal-prd.bikdgh.ng.0001.apne1.cache.amazonaws.com:6379/0',
      SENTRY_DSN: 'https://965d96d9a47e4ea79d3caf200d00c524@o879000.ingest.sentry.io/5831515',
      RAILS_LOG_TO_STDOUT: '1',
      RAILS_SERVE_STATIC_FILES: '1',
      RAILS_SERVE_STATIC_FILES_CC: 'public, max-age=31536000',
      DEFAULT_URL_HOST: 'portal.isucon.net',
      ISUXPORTAL_MAX_TEAMS: '600',
      ISUXPORTAL_FINAL: '1',
      ISUXPORTAL_DISCORD_SERVER_ID: '857222988088737803',  // ISUCON11
      ISUXPORTAL_DISCORD_CHANNEL_ID: '857222988583796781',  // #final-announcement
      ISUXPORTAL_DISCORD_ADMIN_ROLE_ID: '857222988368707584',
      ISUXPORTAL_DISCORD_CONTESTANT_ROLE_ID: '857222988088737806',
      ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE_ID: '857222988088737805',
      ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE: '1',
      ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE_ID: '857222988088737804',
      ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE: '1',
      ISUXPORTAL_DISCORD_SUPPORT_COMM_CHANNEL_ROLES: '857222988583796784=857222988088737809,857222988583796785=857222988088737808,857222988781191178=857222988088737807',
      ISUXPORTAL_TIMING_REGISTRATION_OPEN: '2021-07-24T02:00:00Z',
      ISUXPORTAL_TIMING_REGISTRATION_CLOSE: '2021-07-24T04:40:00Z',
      ISUXPORTAL_TIMING_REGISTRATION_INVITATION_CLOSE: '2021-07-30T09:00:00Z',
      ISUXPORTAL_TIMING_REGISTRATION_UPDATE_CLOSE: '2021-07-30T09:00:00Z',
      ISUXPORTAL_TIMING_CONTEST_START: '2021-09-18T01:00:00Z',
      ISUXPORTAL_TIMING_CONTEST_FREEZE: '2021-09-18T08:00:00Z',
      ISUXPORTAL_TIMING_CONTEST_END: '2021-09-18T09:00:00Z',
      ISUXPORTAL_SHORYUKEN_QUEUE: 'isuxportal-activejob-prd',
      ISUXPORTAL_TERMS_URL: 'https://isucon.net/archives/55857411.html',
      ISUXPORTAL_RULES_URL: 'https://isucon.net/archives/55854734.html',
      ISUXPORTAL_DOCS_URL: 'https://gist.github.com/motoki317/4aab0ecedf5cc150060d2e857e95895b',
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
      secret('ISUXPORTAL_CHECKER_SECRET'),
      secret('ISUXPORTAL_SSH_KEY_API_SECRET'),
      secret('ISUXPORTAL_BENCH_TOKEN'),
      secret('ISUXPORTAL_VAPID_PRIVATE_KEY'),
    ],
    mount_points: [
    ],
    log_configuration: utils.awsLogs('app'),
  },
  volumes: {
  },
  scripts: [
    utils.githubTag('isucon/isucon11-portal') {
      checks: ['portal-build'],
    },
    utils.createLogGroups(),
  ],
}
