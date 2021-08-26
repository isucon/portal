resource "aws_iam_role" "ec2-monitoring-role" {
  name                 = "ec2-monitoring-role"
  description          = "ec2-monitoring-role"
  assume_role_policy   = data.aws_iam_policy_document.ec2-monitoring-role-trust.json
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
}

data "aws_iam_policy_document" "ec2-monitoring-role-trust" {
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

data "aws_iam_policy_document" "ec2-monitoring-role-policy" {
  statement {
    effect = "Allow"
    actions = [
        "ec2:DescribeInstances",
    ]
    resources = [
      "*",
    ]
  }
}

resource "aws_iam_role_policy" "ec2-monitoring-role-policy" {
  role   = aws_iam_role.ec2-monitoring-role.id
  name   = "ec2-monitoring-role-policy"
  policy = data.aws_iam_policy_document.ec2-monitoring-role-policy.json
}

resource "aws_iam_instance_profile" "ec2-monitoring-profile" {
  name  = "ec2-monitoring-profile"
  role  = aws_iam_role.ec2-monitoring-role.id
}
