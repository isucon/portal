# Isuxportal

## Setup

### Run MySQL on docker-compose

```
docker-compose up -d mysql
```

(config/database.yml defaults to randomly exposed port of the mysql container)

### Dependencies

```
yarn
bundle install
bundle exec rake db:migrate
```

## Run server

- `npx webpack --progress --watch`
- `bundle exec rails s`

## Test

```
bundle exec rspec -fd
```

## Environment Variables

`./config/environments`参照

- `ISUXPORTAL_SLACK_WEBHOOK_URL`
- `ISUXPORTAL_GITHUB_CLIENT_ID` `ISUXPORTAL_GITHUB_CLIENT_SECRET`
  - scope: `keys:read`
- `ISUXPORTAL_DISCORD_CLIENT_ID` `ISUXPORTAL_DISCORD_CLIENT_SECRET`
  - scope: `identity`
- `ISUXPORTAL_DISCORD_BOT_TOKEN`
- `ISUXPORTAL_DISCORD_SERVER_ID`
- `ISUXPORTAL_DISCORD_CHANNEL_ID`: アナウンスのチャンネル
- `ISUXPORTAL_DISCORD_CONTESTANT_ROLE_ID`
- `ISUXPORTAL_DISCORD_ADMIN_ROLE_ID`
- `ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE`: `'1'`で有効
- `ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE_ID`
- `ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE`: `'1'`で有効
- `ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE_ID`
- `ISUXPORTAL_DISCORD_SUPPORT_COMM_CHANNEL_ROLES`: `channelID1=roleID1,channelID2=roleID2`の形式

- `ISUXPORTAL_ADMIN_ONLY`
- `ISUXPORTAL_ADMIN_LOGIN`
- `ISUXPORTAL_ADMIN_PASSWORD`

- `ISUXPORTAL_MAX_TEAMS`: 最大チーム数 (非表示チームは含まない)
- `ISUXPORTAL_FINAL`: `'1'`で有効
- `ISUXPORTAL_TIMING_REGISTRATION_OPEN`
- `ISUXPORTAL_TIMING_REGISTRATION_CLOSE`
- `ISUXPORTAL_TIMING_REGISTRATION_INVITATION_CLOSE`
- `ISUXPORTAL_TIMING_REGISTRATION_UPDATE_CLOSE`

- `ISUXPORTAL_TIMING_CONTEST_START`
- `ISUXPORTAL_TIMING_CONTEST_FREEZE`
- `ISUXPORTAL_TIMING_CONTEST_END`

- `ISUXPORTAL_BENCH_TOKEN`
- `ISUXPORTAL_BYPASS_SECRET`
- `ISUXPORTAL_CHECKER_SECRET`
- `ISUXPORTAL_SSH_KEY_API_SECRET`
- `ISUXPORTAL_DCIM_TOKEN`

- `ISUXPORTAL_TERMS_URL`: 規約へのリンク
- `ISUXPORTAL_RULES_URL`: レギュレーションへのリンク
- `ISUXPORTAL_DOCS_URL`: 当日マニュアルへのリンク

- `ISUXPORTAL_VAPID_PRIVATE_KEY`
- `ISUXPORTAL_VAPID_SUBJECT`

- `SENTRY_DSN`

## Misc

### protoc

```
./bin/isuxportal-protoc.sh
```

### CloudFormation テンプレートについて

CloudFormation のテンプレートは`/app/models/cf_templates`に存在
チェッカーでの AMI ID のチェックに使われる値は`/app/controllers/api/env_checks_controller`に別で記載されているので、テンプレートの変更時はそこも変更することが必要
