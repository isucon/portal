resource "aws_s3_bucket" "isucon10-machine-images" {
  bucket = "isucon10-machine-images"
  region = "ap-northeast-1"
  tags = {
    Project = "isucon10"
  }
}


