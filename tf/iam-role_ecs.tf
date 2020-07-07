resource "aws_iam_role" "Ecs" {
  name                 = "Ecs"
  description          = "Ecs"
  assume_role_policy   = data.aws_iam_policy_document.ecs-trust.json
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
}

data "aws_iam_policy_document" "ecs-trust" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type = "Service"
      identifiers = [
        "ec2.amazonaws.com",
      ]
    }
  }
}

resource "aws_iam_role_policy" "Ecs-ecr" {
  role   = aws_iam_role.Ecs.id
  name   = "ecr"
  policy = data.aws_iam_policy_document.Ecs-ecr.json
}

data "aws_iam_policy_document" "Ecs-ecr" {
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

resource "aws_iam_role_policy" "Ecs-ecs" {
  role   = aws_iam_role.Ecs.id
  name   = "ecs"
  policy = data.aws_iam_policy_document.Ecs-ecs.json
}

data "aws_iam_policy_document" "Ecs-ecs" {
  statement {
    effect = "Allow"
    actions = [
      "ec2:CreateTags",
      "ec2:DescribeTags",
      "ecs:DeregisterContainerInstance",
      "ecs:DiscoverPollEndpoint",
      "ecs:Poll",
      "ecs:RegisterContainerInstance",
      "ecs:StartTelemetrySession",
      "ecs:UpdateContainerInstancesState",
      "ecs:Submit*",
    ]
    resources = ["*"]
  }
}

resource "aws_iam_instance_profile" "Ecs" {
  name = "Ecs"
  role = aws_iam_role.Ecs.name
}
