resource "aws_iam_role" "IsuxportalPrd" {
  name                 = "IsuxportalPrd"
  description          = "IsuxportalPrd"
  assume_role_policy   = data.aws_iam_policy_document.IsuxportalPrd-trust.json
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
}

data "aws_iam_policy_document" "IsuxportalPrd-trust" {
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

resource "aws_iam_role_policy_attachment" "IsuxportalPrd-EcsTaskBase" {
  role       = aws_iam_role.IsuxportalPrd.name
  policy_arn = aws_iam_policy.EcsTaskBase.arn
}



resource "aws_iam_role_policy" "IsuxportalPrd" {
  role   = aws_iam_role.IsuxportalPrd.name
  policy = data.aws_iam_policy_document.IsuxportalPrd.json
}

data "aws_iam_policy_document" "IsuxportalPrd" {
  statement {
    effect = "Allow"
    actions = [
      "sqs:ChangeMessageVisibility",
      "sqs:ChangeMessageVisibilityBatch",
      "sqs:DeleteMessage",
      "sqs:DeleteMessageBatch",
      "sqs:GetQueueAttributes",
      "sqs:GetQueueUrl",
      "sqs:ReceiveMessage",
      "sqs:SendMessage",
      "sqs:SendMessageBatch",
      "sqs:ListQueues",
    ]
    resources = [
      aws_sqs_queue.isuxportal-activejob-prd.arn,
      aws_sqs_queue.isuxportal-activejob-dlq-prd.arn,
    ]
  }
}


