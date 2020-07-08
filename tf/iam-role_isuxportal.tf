resource "aws_iam_role" "Isuxportal" {
  name                 = "Isuxportal"
  description          = "Isuxportal"
  assume_role_policy   = data.aws_iam_policy_document.Isuxportal-trust.json
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
}

data "aws_iam_policy_document" "Isuxportal-trust" {
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

resource "aws_iam_role_policy_attachment" "Isuxportal-EcsTaskBase" {
  role       = aws_iam_role.Isuxportal.name
  policy_arn = aws_iam_policy.EcsTaskBase.arn
}

