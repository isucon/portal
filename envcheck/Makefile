.PHONY: build
build: isucon-env-checker/isucon-env-checker
	packer build envcheck.pkr.hcl

isucon-env-checker/isucon-env-checker: isucon-env-checker/*.go isucon-env-checker/go.*
	cd isucon-env-checker && GOOS=linux GOARCH=amd64 go build .
