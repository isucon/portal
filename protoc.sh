#!/bin/zsh -xe
cd "$(dirname $0)"
(
  mkdir -p tmp/protoc-go
  protoc -I=proto --go_out=tmp/protoc-go --go-grpc_out=tmp/protoc-go proto/**/*.proto
  rm -rf proto.go
  mv tmp/protoc-go/github.com/isucon/isucon10-portal/proto.go ./
  rm -rf tmp/protoc-go
)

(
  cd "$(dirname $0)/portal"

  rm -rf app/javascript/pb*.js  app/javascript/pb*.d.ts lib/isuxportal sw/src/pb.js sw/src/pb*.d.ts || :
  bundle exec grpc_tools_ruby_protoc -I../proto --ruby_out=./lib --grpc_out=./lib ../proto/**/*.proto

  npx pbjs -p ../proto -t static-module -w commonjs -o app/javascript/pb.js \
    ../proto/google/**/*.proto \
    ../proto/isuxportal/*.proto \
    ../proto/isuxportal/resources/*.proto \
    ../proto/isuxportal/services/{common,audience,contestant,registration}/*.proto 
  npx pbts -o app/javascript/pb.d.ts app/javascript/pb.js

  npx pbjs -p ../proto -t static-module -w commonjs -o app/javascript/pb_admin.js \
    ../proto/google/**/*.proto \
    ../proto/isuxportal/*.proto \
    ../proto/isuxportal/resources/*.proto \
    ../proto/isuxportal/services/{common,admin,audience,contestant,registration}/*.proto 
  npx pbts -o app/javascript/pb_admin.d.ts app/javascript/pb_admin.js

  npx pbjs -p ../proto -t static-module -w commonjs -o sw/src/pb.js \
    ../proto/google/**/*.proto \
    ../proto/isuxportal/resources/notification.proto
  npx pbts -o sw/src/pb.d.ts sw/src/pb.js

)
