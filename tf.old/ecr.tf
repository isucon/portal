resource "aws_ecr_repository" "isuxportal" {
  name = "isuxportal"
  tags = {
    Project = "isucon10"
  }
}
