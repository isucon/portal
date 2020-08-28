provider "aws" {
  version             = "~> 2.0"
  region              = "ap-northeast-1"
  allowed_account_ids = ["516315029474"]
}

provider "aws" {
  alias               = "use1"
  version             = "~> 2.0"
  region              = "us-east-1"
  allowed_account_ids = ["516315029474"]
}
