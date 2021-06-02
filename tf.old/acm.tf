resource "aws_acm_certificate" "wild-x-isucon-dev" {
  domain_name       = "*.x.isucon.dev"
  validation_method = "DNS"
  tags = {
    Project = "isucon10"
  }
  lifecycle {
    create_before_destroy = true
  }
}
resource "aws_acm_certificate_validation" "wild-x-isucon-dev" {
  certificate_arn = aws_acm_certificate.wild-x-isucon-dev.arn
  validation_record_fqdns = [
    aws_route53_record.acm-validation_use1_wild-x-isucon-dev.fqdn,
  ]
}

resource "aws_acm_certificate" "use1_wild-x-isucon-dev" {
  provider          = aws.use1
  domain_name       = "*.x.isucon.dev"
  validation_method = "DNS"
  tags = {
    Project = "isucon10"
  }
  lifecycle {
    create_before_destroy = true
  }
}
resource "aws_acm_certificate_validation" "use1_wild-x-isucon-dev" {
  provider        = aws.use1
  certificate_arn = aws_acm_certificate.use1_wild-x-isucon-dev.arn
  validation_record_fqdns = [
    aws_route53_record.acm-validation_use1_wild-x-isucon-dev.fqdn,
  ]
}

resource "aws_acm_certificate" "use1_portal-isucon-net" {
  provider                  = aws.use1
  domain_name               = "portal.isucon.net"
  subject_alternative_names = ["portal-dev.isucon.net"]
  validation_method         = "DNS"
  tags = {
    Project = "isucon10"
  }
  lifecycle {
    create_before_destroy = true
  }
}

//---

resource "aws_route53_record" "acm-validation_use1_wild-x-isucon-dev" {
  zone_id = aws_route53_zone.public.zone_id
  name    = aws_acm_certificate.wild-x-isucon-dev.domain_validation_options.0.resource_record_name
  type    = aws_acm_certificate.wild-x-isucon-dev.domain_validation_options.0.resource_record_type
  ttl     = 5
  records = [aws_acm_certificate.wild-x-isucon-dev.domain_validation_options.0.resource_record_value]
}
