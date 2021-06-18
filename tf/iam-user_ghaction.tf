resource "aws_iam_user" "ghaction" {
  name                 = "ghaction"
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
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
