local utils = import 'lib/utils.libsonnet';
local front = import 'public/lib/front.libsonnet';
local secret = utils.makeSecretParameterStore('isuxportal-dev');

{
  scheduler: {
    task_role_arn: utils.iamRole('IsuxportalDev'),
    capacity_provider_strategy: [
      { capacity_provider: 'FARGATE_SPOT', weight: 1 },
    ],
  },
  app: {
    image: utils.ecrRepository('isuxportal'),
    cpu: 256 - 64,
    memory: 512 - 128,
    env: {
      AWS_REGION: 'ap-northeast-1',
      RACK_ENV: 'development',
      RAILS_ENV: 'development',
      SENTRY_ENVIRONMENT: 'development',
      DATABASE_URL: 'mysql2://isuxportal_dev@isuxportal-dev.cluster-cwda4z5vn03a.ap-northeast-1.rds.amazonaws.com/isuxportal_dev?encoding=utf8mb4&charset=utf8mb4&collation=utf8mb4_general_ci',
      REDIS_URL: 'redis://isuxportal-dev.bikdgh.ng.0001.apne1.cache.amazonaws.com:6379/0',
      // SENTRY_DSN: 'TODO',
      RAILS_LOG_TO_STDOUT: '1',
      RAILS_SERVE_STATIC_FILES: '1',
      RAILS_SERVE_STATIC_FILES_CC: 'public, max-age=31536000',
      DEFAULT_URL_HOST: 'portal-dev.isucon.net',
      ISUXPORTAL_DEV_REDIS: '1',
      // See config/environments/development.rb
      ISUXPORTAL_ADMIN_ONLY: '1',
      ISUXPORTAL_ADMIN_LOGIN: 'neonlight',
      ISUXPORTAL_BENCH_TOKEN: 'devtoken',  // TODO: change
      ISUXPORTAL_SHORYUKEN_QUEUE: 'isuxportal-activejob-dev',
      DISABLE_SHORYUKEN: '0',
      ISUXPORTAL_TIMING_REGISTRATION_OPEN: '2021-06-01T09:00:00Z',
      ISUXPORTAL_TIMING_REGISTRATION_CLOSE: '2021-06-31T09:00:00Z',
      ISUXPORTAL_TIMING_REGISTRATION_INVITATION_CLOSE: '2021-06-31T09:00:00Z',
      ISUXPORTAL_TIMING_REGISTRATION_UPDATE_CLOSE: '2021-06-31T09:00:00Z',
      ISUXPORTAL_TIMING_CONTEST_START: '2021-07-14T09:00:00Z',
      ISUXPORTAL_TIMING_CONTEST_FREEZE: '2021-07-14T18:00:00Z',
      ISUXPORTAL_TIMING_CONTEST_END: '2021-07-14T19:00:00Z',
      ISUXPORTAL_DISCORD_SERVER_ID: '854716733784850433',  // ISUCON11 portal-dev
      ISUXPORTAL_DISCORD_CHANNEL_ID: '854716734187241517',  // #announcements
      ISUXPORTAL_DISCORD_CONTESTANT_ROLE_ID: '854716733784850436',
      ISUXPORTAL_DISCORD_ADMIN_ROLE_ID: '854716734187241512',
      ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE_ID: '854716733784850435',
      ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE: '0',
      ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE_ID: '854716733784850434',
      ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE: '0',
      ISUXPORTAL_DISCORD_SUPPORT_COMM_CHANNEL_ROLES: '854716734509809693=854716733784850439,854716734760812554=854716733784850438,854716734760812555=854716733784850437',
    },
    secrets: [
      secret('SECRET_KEY_BASE'),
      secret('DATABASE_PASSWORD'),
      // secret('NEW_RELIC_LICENSE_KEY'),
      secret('ISUXPORTAL_SLACK_WEBHOOK_URL'),
      secret('ISUXPORTAL_GITHUB_CLIENT_ID'),
      secret('ISUXPORTAL_GITHUB_CLIENT_SECRET'),
      secret('ISUXPORTAL_DISCORD_CLIENT_ID'),
      secret('ISUXPORTAL_DISCORD_CLIENT_SECRET'),
      secret('ISUXPORTAL_DISCORD_BOT_TOKEN'),
      secret('ISUXPORTAL_ADMIN_PASSWORD'),
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
