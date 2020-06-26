resource "aws_route53_zone" "private" {
  name = "x.isucon.dev"
  tags = {
    Project = "isucon10"
  }

  vpc {
    vpc_id = aws_vpc.main.id
  }
}
