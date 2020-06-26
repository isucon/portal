terraform {
  backend "s3" {
    bucket               = "isucon10-misc"
    workspace_key_prefix = "terraform"
    key                  = "terraform/portal.tfstate"
    region               = "ap-northeast-1"
    dynamodb_table       = "isucon10-terraform-locks"
  }
}
