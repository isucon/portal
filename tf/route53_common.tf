########################################
# Production
########################################

data "aws_lb" "hako-isuxportal-prd-fargate" {
  name = "hako-isuxportal-prd-fargate"
}

resource "aws_route53_record" "cname_portal-prd-xi-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      #aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "portal-prd.xi.isucon.dev"
  type    = "CNAME"
  ttl     = "300"
  records = [data.aws_lb.hako-isuxportal-prd-fargate.dns_name]
}

resource "aws_route53_record" "cname_portal-prd-isucon-net-xi-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      #aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "portal-isucon-net.xi.isucon.dev"
  type    = "CNAME"
  ttl     = "300"
  records = ["${aws_cloudfront_distribution.isuxportal-prd.domain_name}."]
}
########################################
# Dev
########################################


data "aws_lb" "hako-isuxportal-dev-fargate" {
  name = "hako-isuxportal-dev-fargate"
}

resource "aws_route53_record" "cname_portal-dev-xi-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      #aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "portal-dev.xi.isucon.dev"
  type    = "CNAME"
  ttl     = "300"
  records = [data.aws_lb.hako-isuxportal-dev-fargate.dns_name]
}

resource "aws_route53_record" "cname_portal-dev-isucon-net-xi-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      #aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "portal-dev-isucon-net.xi.isucon.dev"
  type    = "CNAME"
  ttl     = "300"
  records = ["${aws_cloudfront_distribution.isuxportal-dev.domain_name}."]
}

data "aws_lb" "hako-isuxportal-dev-grpc-fargate" {
  name = "hako-isuxportal-dev-grpc-fargate"
}

resource "aws_route53_record" "cname_isuxportal-dev-grpc-xi-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      #aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "isuxportal-dev-grpc.xi.isucon.dev"
  type    = "CNAME"
  ttl     = "300"
  records = [data.aws_lb.hako-isuxportal-dev-grpc-fargate.dns_name]
}
