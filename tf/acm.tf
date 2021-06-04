resource "aws_acm_certificate" "wild-xi-isucon-dev" {
  domain_name       = "*.xi.isucon.dev"
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "wild-xi-isucon-dev" {
  certificate_arn = aws_acm_certificate.wild-xi-isucon-dev.arn
  validation_record_fqdns = [
    for record in aws_route53_record.acm-validation_use1_wild-xi-isucon-dev : record.fqdn
  ]
}

resource "aws_acm_certificate" "use1_wild-xi-isucon-dev" {
  provider          = aws.use1
  domain_name       = "*.xi.isucon.dev"
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "use1_wild-xi-isucon-dev" {
  provider        = aws.use1
  certificate_arn = aws_acm_certificate.use1_wild-xi-isucon-dev.arn
  validation_record_fqdns = [
    for record in aws_route53_record.acm-validation_use1_wild-xi-isucon-dev : record.fqdn
  ]
}

resource "aws_acm_certificate" "use1_portal-isucon-net" {
  provider                  = aws.use1
  domain_name               = "portal.isucon.net"
  subject_alternative_names = ["portal-dev.isucon.net"]
  validation_method         = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "acm-validation_use1_wild-xi-isucon-dev" {
  zone_id = aws_route53_zone.public.zone_id
  for_each = {
    for dvo in aws_acm_certificate.wild-xi-isucon-dev.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }
  name            = each.value.name
  records         = [each.value.record]
  type            = each.value.type
  ttl             = 5
}
