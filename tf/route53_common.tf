
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
