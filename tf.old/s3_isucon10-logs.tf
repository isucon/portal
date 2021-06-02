resource "aws_s3_bucket" "isucon10-logs" {
  bucket = "isucon10-logs"
  region = "ap-northeast-1"
  tags = {
    Project = "isucon10"
  }


  grant {
    id          = "61b3f9bda5e8c3ab1f6fb5a146412cd193ce31dbebf8b0f9cb8ffe1383b490f5" // isucon10-aws
    type        = "CanonicalUser"
    permissions = ["FULL_CONTROL"]
  }
  grant {
    // https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html#access-logs-choosing-s3-bucket
    id          = "c4c1ede66af53448b93c283ce9448c4ba468c9432aa01d700d3878632f77d2d0"
    type        = "CanonicalUser"
    permissions = ["FULL_CONTROL"]
  }
}

resource "aws_s3_bucket_policy" "isucon10-logs" {
  bucket = "isucon10-logs"
  policy = data.aws_iam_policy_document.allow-putting-elb-access-logs.json
}

data "aws_iam_policy_document" "allow-putting-elb-access-logs" {
  statement {
    effect = "Allow"
    principals {
      type = "AWS"
      // Elastic Load Balancing Account ID of ap-northeast-1
      // https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html#access-logging-bucket-permissions
      identifiers = ["582318560864"]
    }
    actions = ["s3:PutObject"]
    resources = [
      "arn:aws:s3:::isucon10-logs/*",
    ]
  }
}
