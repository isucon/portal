resource "aws_iam_role" "LambdaEc2R53" {
  name                 = "LambdaEc2R53"
  description          = "LambdaEc2R53"
  assume_role_policy   = data.aws_iam_policy_document.LambdaEc2R53-trust.json
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
}

data "aws_iam_policy_document" "LambdaEc2R53-trust" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type = "Service"
      identifiers = [
        "lambda.amazonaws.com",
      ]
    }
  }
}

resource "aws_iam_role_policy" "LambdaEc2R53" {
  role   = aws_iam_role.LambdaEc2R53.id
  name   = "ec2-r53"
  policy = data.aws_iam_policy_document.LambdaEc2R53.json
}

data "aws_iam_policy_document" "LambdaEc2R53" {
  statement {
    effect = "Allow"
    actions = [
      "route53:ListResourceRecordSets",
      "route53:ChangeResourceRecordSets",
      "ec2:DescribeInstances",
      "ec2:DescribeVpcs",
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]
    resources = ["*"]
  }
}

