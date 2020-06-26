resource "aws_route53_zone" "public" {
  name = "x.isucon.dev"
  tags = {
    Project = "isucon10"
  }
}

