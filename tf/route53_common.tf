
resource "aws_route53_record" "txt_x-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "x.isucon.dev"
  type    = "TXT"
  ttl     = "300"
  records = [
    "v=spf1 include:amazonses.com ~all",
  ]
}

resource "aws_route53_record" "caa_x-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "x.isucon.dev"
  type    = "CAA"
  ttl     = "300"
  records = [
    "0 issue \"amazonaws.com\"",
    "0 issue \"letsencrypt.org\"",
  ]
}

resource "aws_route53_record" "mx_x-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "x.isucon.dev"
  type    = "MX"
  ttl     = "300"
  records = ["0 ."]
}

resource "aws_route53_record" "dmarc-x-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "_dmarc.x.isucon.dev"
  type    = "TXT"
  ttl     = "300"
  records = ["v=DMARC1; p=reject"]
}

data "aws_instance" "bastion-001" {
  filter {
    name   = "tag:Name"
    values = ["bastion-001"]
  }
}
resource "aws_route53_record" "a_bastion-x-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "bastion.x.isucon.dev"
  type    = "A"
  ttl     = "300"
  records = [data.aws_instance.bastion-001.public_ip]
}

resource "aws_route53_record" "aaaa_bastion-x-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "bastion.x.isucon.dev"
  type    = "AAAA"
  ttl     = "300"
  //https://github.com/terraform-providers/terraform-provider-aws/issues/12785
  //records = data.aws_instance.bastion-001.ipv6_addresses
  records = ["2406:da14:73e:aec0:e91c:9649:de13:a354"]
}

resource "aws_route53_record" "cname_portal-prd-x-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "portal-prd.x.isucon.dev"
  type    = "CNAME"
  ttl     = "300"
  records = ["hako-isuxportal-prd-fargate-437609489.ap-northeast-1.elb.amazonaws.com."]
}

data "aws_lb" "hako-isuxportal-prd-grpc-fargate" {
  name = "hako-isuxportal-prd-grpc-fargate"
}

resource "aws_route53_record" "cname_portal-grpc-prd-x-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "portal-grpc-prd.x.isucon.dev"
  type    = "CNAME"
  ttl     = "300"
  records = [data.aws_lb.hako-isuxportal-prd-grpc-fargate.dns_name]
}

resource "aws_route53_record" "cname_portal-isucon-net-x-isucon-dev" {
  for_each = {
    for k in [
      aws_route53_zone.public.zone_id,
      aws_route53_zone.private.zone_id,
    ] : k => k
  }
  zone_id = each.value
  name    = "portal-isucon-net.x.isucon.dev"
  type    = "CNAME"
  ttl     = "300"
  records = ["${aws_cloudfront_distribution.isuxportal-prd.domain_name}."]
}

resource "aws_route53_record" "a_cn-hv-x-isucon-dev-public" {
  count = 24

  zone_id = aws_route53_zone.public.zone_id
  name    = "isucn${format("%04d", count.index + 1)}.hv.x.isucon.dev"
  type    = "A"
  ttl     = "300"
  records = ["10.200.80.${64 + count.index + 1}"]
}

resource "aws_route53_record" "a_cn-hv-x-isucon-dev-private" {
  count = 24

  zone_id = aws_route53_zone.private.zone_id
  name    = "isucn${format("%04d", count.index + 1)}.hv.x.isucon.dev"
  type    = "A"
  ttl     = "300"
  records = ["10.200.80.${64 + count.index + 1}"]
}


resource "aws_route53_record" "a_adm-hv-x-isucon-dev-public" {
  count = 8

  zone_id = aws_route53_zone.public.zone_id
  name    = "isuadm${format("%04d", count.index + 1)}.hv.x.isucon.dev"
  type    = "A"
  ttl     = "300"
  records = ["10.200.80.${64 + 24 + count.index + 1}"]
}

resource "aws_route53_record" "a_adm-hv-x-isucon-dev-private" {
  count = 8

  zone_id = aws_route53_zone.private.zone_id
  name    = "isuadm${format("%04d", count.index + 1)}.hv.x.isucon.dev"
  type    = "A"
  ttl     = "300"
  records = ["10.200.80.${64 + 24 + count.index + 1}"]
}
