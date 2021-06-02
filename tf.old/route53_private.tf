resource "aws_route53_zone" "private" {
  name = "x.isucon.dev"
  tags = {
    Project = "isucon10"
  }

  vpc {
    vpc_id = aws_vpc.main.id
  }
}

resource "aws_route53_record" "a_isux-builder-001-c-x-isucon-dev" {
  zone_id = aws_route53_zone.private.zone_id
  name    = "isux-builder-001.c.x.isucon.dev"
  type    = "A"
  ttl     = "300"
  records = ["10.14.128.202"]
}
