resource "aws_cloudfront_distribution" "isuxportal-prd" {
  enabled         = true
  is_ipv6_enabled = true
  comment         = "isuxportal-prd"
  aliases         = ["portal.isucon.net"]

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.use1_portal-isucon-net.arn
    minimum_protocol_version = "TLSv1.2_2019"
    ssl_support_method       = "sni-only"
  }

  logging_config {
    include_cookies = false
    bucket          = "isucon10-logs.s3.amazonaws.com"
    prefix          = "cloudfront/isuxportal-prd/"
  }

  origin {
    origin_id   = "portal-prd"
    domain_name = "portal-prd.x.isucon.dev"
    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_protocol_policy   = "https-only"
      origin_ssl_protocols     = ["TLSv1.2"]
      origin_keepalive_timeout = 30
      origin_read_timeout      = 35
    }
  }
  origin {
    origin_id   = "portal-prd-web"
    domain_name = "portal-prd-web.x.isucon.dev"
    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_protocol_policy   = "https-only"
      origin_ssl_protocols     = ["TLSv1.2"]
      origin_keepalive_timeout = 30
      origin_read_timeout      = 35
    }
  }


  ordered_cache_behavior {
    path_pattern     = "/packs/*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "portal-prd"
    forwarded_values {
      query_string = false
      headers      = ["Host"]
      cookies {
        forward = "none"
      }

    }
    min_ttl                = 0
    default_ttl            = 31536000
    max_ttl                = 31536000
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  ordered_cache_behavior {
    path_pattern     = "/api/audience/*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "portal-prd"
    forwarded_values {
      query_string = true
      headers      = ["Host", "Accept"]
      cookies {
        forward = "none"
      }

    }
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 300
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  ordered_cache_behavior {
    path_pattern     = "/api/contestant/dashboard"
    allowed_methods  = ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "portal-prd-web"
    forwarded_values {
      query_string = true
      headers      = ["Host", "Accept", "X-Csrf-Token", "User-Agent"]
      cookies {
        forward           = "whitelist"
        whitelisted_names = ["__Host-isuxportal_sess"]
      }
    }
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }


  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "portal-prd"
    forwarded_values {
      query_string = true
      headers      = ["Host", "Accept", "X-Csrf-Token", "User-Agent"]
      cookies {
        forward           = "whitelist"
        whitelisted_names = ["__Host-isuxportal_sess"]
      }
    }
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}
