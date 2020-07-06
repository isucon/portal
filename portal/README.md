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
rm -rf app/javascript/pb lib/isuxportal
protoc -I../proto --ruby_out=./lib --js_out="import_style=commonjs,binary:./app/javascript/pb" --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" --ts_out=./app/javascript/pb ../proto/**/*.proto
protoc -I../proto --ruby_out=./lib ../proto/**/*.proto
npx pbjs -p ../proto -t static-module -w commonjs -o app/javascript/pb.js ../proto/**/*.proto
npx pbts -o app/javascript/pb.d.ts app/javascript/pb.js
```
