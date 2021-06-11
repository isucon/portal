resource "aws_s3_bucket" "isucon-public" {
  bucket = "isucon-public"
}

resource "aws_s3_bucket_policy" "isucon-public" {
  bucket = aws_s3_bucket.isucon-public.bucket
  policy = data.aws_iam_policy_document.isucon-public.json
}

data "aws_iam_policy_document" "isucon-public" {
  statement {
    effect = "Allow"
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
    actions = ["s3:GetObject"]
    resources = [
      "arn:aws:s3:::${aws_s3_bucket.isucon-public.id}/*",
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
      "arn:aws:s3:::${aws_s3_bucket.isucon-public.id}",
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
