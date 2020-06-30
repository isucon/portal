resource "aws_iam_role" "CodeBuildBase" {
  name                 = "CodeBuildBase"
  description          = "CodeBuildBase"
  assume_role_policy   = data.aws_iam_policy_document.codebuild-trust.json
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
  max_session_duration = 43200
}

data "aws_iam_policy_document" "codebuild-trust" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type = "Service"
      identifiers = [
        "codebuild.amazonaws.com",
      ]
    }
  }
}

resource "aws_iam_role_policy" "CodeBuildBase-ecr" {
  role   = aws_iam_role.CodeBuildBase.id
  name   = "ecr"
  policy = data.aws_iam_policy_document.CodeBuildBase-ecr.json
}

data "aws_iam_policy_document" "CodeBuildBase-ecr" {
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

