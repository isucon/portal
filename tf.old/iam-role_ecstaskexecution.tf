resource "aws_iam_role" "EcsTaskExecution" {
  name                 = "EcsTaskExecution"
  description          = "EcsTaskExecution"
  assume_role_policy   = data.aws_iam_policy_document.EcsTaskExecution-trust.json
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
}

data "aws_iam_policy_document" "EcsTaskExecution-trust" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type = "Service"
      identifiers = [
        "ecs-tasks.amazonaws.com",
      ]
    }
  }
}
resource "aws_iam_role_policy" "EcsTaskExecution-ecs" {
  role   = aws_iam_role.EcsTaskExecution.id
  name   = "ecs"
  policy = data.aws_iam_policy_document.EcsTaskExecution-ecs.json
}

data "aws_iam_policy_document" "EcsTaskExecution-ecs" {
  statement {
    effect = "Allow"
    actions = [
      "ecr:BatchCheckLayerAvailability",
      "ecr:BatchGetImage",
      "ecr:GetDownloadUrlForLayer",
      "ecr:GetAuthorizationToken",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]
    resources = ["*"]
  }
  statement {
    effect = "Allow"
    actions = [
      "ssm:GetParameters",
    ]
    resources = ["arn:aws:ssm:*:516315029474:parameter/hako/*"]
  }
  statement {
    effect = "Allow"
    actions = [
      "kms:Decrypt",
    ]
    resources = [aws_kms_key.isucon10.arn]
  }
}
