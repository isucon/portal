resource "aws_route53_record" "cname_portal-prd-xi-isucon-dev" {
  zone_id = aws_route53_zone.public.zone_id
  name    = "portal-prd.xi.isucon.dev"
  type    = "CNAME"
  ttl     = "300"
  records = ["tmp"]
}

resource "aws_route53_record" "cname_portal-grpc-prd-x-isucon-dev" {
  zone_id = aws_route53_zone.public.zone_id
  name    = "portal-grpc-prd.xi.isucon.dev"
  type    = "CNAME"
  ttl     = "300"
  records = ["tmp"]
}

resource "aws_route53_record" "cname_portal-isucon-net-x-isucon-dev" {
  zone_id = aws_route53_zone.public.zone_id
  name    = "portal-isucon-net.xi.isucon.dev"
  type    = "CNAME"
  ttl     = "300"
  records = ["tmp"]
}
