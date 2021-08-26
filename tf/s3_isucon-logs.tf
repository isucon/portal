resource "aws_s3_bucket" "isucon-logs" {
  bucket = "isucon11-logs"
}

resource "aws_s3_bucket_policy" "isucon-logs" {
  bucket = aws_s3_bucket.isucon-logs.id
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
      "arn:aws:s3:::${aws_s3_bucket.isucon-logs.id}/*",
    ]
  }
}

