resource "aws_route53_record" "cname_portal-prd-xi-isucon-dev" {
  zone_id = aws_route53_zone.public.zone_id
  name    = "portal-prd.xi.isucon.dev"
  type    = "CNAME"
  ttl     = "300"
  records = []
}
