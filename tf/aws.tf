variable aws_account_id {}

provider "aws" {
  region              = "ap-northeast-1"
  allowed_account_ids = ["245943874622"]

  default_tags {
    tags = {
      Project = "portal"
    }
  }
}

provider "aws" {
  alias               = "use1"
  region              = "us-east-1"
  allowed_account_ids = ["245943874622"]

  default_tags {
    tags = {
      Project = "portal"
    }
  }
}
