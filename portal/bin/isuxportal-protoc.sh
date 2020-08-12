#!/bin/zsh -xe
cd "$(dirname $0)/.."

rm -rf app/javascript/pb*.js  app/javascript/pb*.d.ts lib/isuxportal || :
bundle exec grpc_tools_ruby_protoc -I../proto --ruby_out=./lib --grpc_out=./lib ../proto/**/*.proto

npx pbjs -p ../proto -t static-module -w commonjs -o app/javascript/pb.js \
  ../proto/google/**/*.proto \
  ../proto/isuxportal/*.proto \
  ../proto/isuxportal/resources/*.proto \
  ../proto/isuxportal/services/{common,audience,registration}/*.proto 
npx pbts -o app/javascript/pb.d.ts app/javascript/pb.js

npx pbjs -p ../proto -t static-module -w commonjs -o app/javascript/pb_admin.js \
  ../proto/google/**/*.proto \
  ../proto/isuxportal/*.proto \
  ../proto/isuxportal/resources/*.proto \
  ../proto/isuxportal/services/{common,admin,audience,registration}/*.proto 
npx pbts -o app/javascript/pb_admin.d.ts app/javascript/pb_admin.js
