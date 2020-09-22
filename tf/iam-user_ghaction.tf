resource "aws_iam_user" "ghaction" {
  name                 = "ghaction"
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
  tags = {
    Project = "isucon10"
  }
}

resource "aws_iam_user_policy" "ghaction-ecr" {
  user   = aws_iam_user.ghaction.name
  name   = "ecr"
  policy = data.aws_iam_policy_document.ghaction-ecr.json
}

data "aws_iam_policy_document" "ghaction-ecr" {
  statement {
    effect = "Allow"
    actions = [
      "ecr:GetAuthorizationToken",
      "ecr:BatchCheckLayerAvailability",
      "ecr:BatchGetImage",
      "ecr:CompleteLayerUpload",
      "ecr:DescribeRepositories",
      "ecr:GetDownloadUrlForLayer",
      "ecr:GetRepositoryPolicy",
      "ecr:InitiateLayerUpload",
      "ecr:PutImage",
      "ecr:UploadLayerPart",
    ]
    resources = ["*"]
  }
}


resource "aws_iam_user_policy" "ghaction-s3" {
  user   = aws_iam_user.ghaction.name
  name   = "s3"
  policy = data.aws_iam_policy_document.ghaction-s3.json
}

data "aws_iam_policy_document" "ghaction-s3" {
  statement {
    effect = "Allow"
    actions = [
      "s3:PutObject",
    ]
    resources = [
      "${aws_s3_bucket.isucon10-machine-images.arn}/supervisor/*",
    ]
  }
}

