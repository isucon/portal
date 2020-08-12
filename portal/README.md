# Isuxportal

## Setup

```
bundle install
bundle exec rake db:create db:migrate
yarn
```

## Run

```
npx webpack --progress --watch
bundle exec rails s
```

```
bundle exec rails runner 'Griffin::Server.run(port: 4000)'
```

## Environment Variables

- `ISUXPORTAL_GITHUB_CLIENT_ID` `ISUXPORTAL_GITHUB_CLIENT_SECRET`
  - scope: `keys:read`
- `ISUXPORTAL_DISCORD_CLIENT_ID` `ISUXPORTAL_DISCORD_CLIENT_SECRET`
  - scope: `identity`
- `ISUXPORTAL_SCHEDULE_REGISTRATION_CLOSE`
- `ISUXPORTAL_SCHEDULE_SSH_UPDATE_CLOSE`
- `ISUXPORTAL_SCHEDULE_CONTEST_START`
- `ISUXPORTAL_SCHEDULE_CONTEST_FREEZE`
- `ISUXPORTAL_SCHEDULE_CONTEST_END`

## Misc

### protoc

```
./bin/isuxportal-protoc.sh
```
