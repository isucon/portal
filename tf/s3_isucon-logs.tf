variable aws_account_id {}
variable aws_account_canonical_id {}

resource "aws_s3_bucket" "isucon-logs" {
  bucket = "isucon-logs"

  grant {
   id          = var.aws_account_canonical_id
   type        = "CanonicalUser"
   permissions = ["FULL_CONTROL"]
 }
}

resource "aws_s3_bucket_policy" "isucon-logs" {
  bucket = "isucon-logs"
  policy = data.aws_iam_policy_document.allow-putting-elb-access-logs.json
}

data "aws_iam_policy_document" "allow-putting-elb-access-logs" {
  statement {
    effect = "Allow"
    principals {
      type = "AWS"
      // Elastic Load Balancing Account ID of ap-northeast-1
      // https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html#access-logging-bucket-permissions
      identifiers = [var.aws_account_id]
    }
    actions = ["s3:PutObject"]
    resources = [
      "arn:aws:s3:::${aws_s3_bucket.isucon-logs.id}/*",
    ]
  }
}

