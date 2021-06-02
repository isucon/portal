resource "aws_s3_bucket" "isucon10-public" {
  bucket = "isucon10-public"
  region = "ap-northeast-1"
  tags = {
    Project = "isucon10"
  }
}

resource "aws_s3_bucket_policy" "isucon10-public" {
  bucket = aws_s3_bucket.isucon10-public.bucket
  policy = data.aws_iam_policy_document.isucon10-public.json
}

data "aws_iam_policy_document" "isucon10-public" {
  statement {
    effect = "Allow"
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
    actions = ["s3:GetObject"]
    resources = [
      "arn:aws:s3:::isucon10-public/*",
    ]
    condition {
      test     = "Bool"
      variable = "aws:SecureTransport"
      values   = ["true"]
    }
  }

  statement {
    effect = "Allow"
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
    actions = ["s3:ListBucket"]
    resources = [
      "arn:aws:s3:::isucon10-public",
    ]
    condition {
      test     = "StringLike"
      variable = "s3:Prefix"
      values   = ["git/6MGgQp9lDmsK6G0CNa0DCOWHkOXID9-1davWxzKzI28/*"]
    }
    condition {
      test     = "Bool"
      variable = "aws:SecureTransport"
      values   = ["true"]
    }
  }
}
