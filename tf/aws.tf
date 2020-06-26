provider "aws" {
  region              = "ap-northeast-1"
  allowed_account_ids = ["516315029474"]
}

provider "aws" {
  alias               = "use1"
  region              = "us-east-1"
  allowed_account_ids = ["516315029474"]
}
