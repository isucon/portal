resource "aws_s3_bucket" "isucon-logs" {
  bucket = "isucon-logs"

  grant {
   id          = "809c053be6795100a6fb06810c8a3ddf944f086e209cddcf82102fc3174e869b"
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
      identifiers = ["245943874622"]
    }
    actions = ["s3:PutObject"]
    resources = [
      "arn:aws:s3:::${aws_s3_bucket.isucon-logs.id}/*",
    ]
  }
}

