resource "aws_iam_role" "IsuxportalDev" {
  name                 = "IsuxportalDev"
  description          = "IsuxportalDev"
  assume_role_policy   = data.aws_iam_policy_document.IsuxportalDev-trust.json
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
}

data "aws_iam_policy_document" "IsuxportalDev-trust" {
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

resource "aws_iam_role_policy_attachment" "IsuxportalDev-EcsTaskBase" {
  role       = aws_iam_role.IsuxportalDev.name
  policy_arn = aws_iam_policy.EcsTaskBase.arn
}



resource "aws_iam_role_policy" "IsuxportalDev" {
  role   = aws_iam_role.IsuxportalDev.name
  policy = data.aws_iam_policy_document.IsuxportalDev.json
}

data "aws_iam_policy_document" "IsuxportalDev" {
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
      aws_sqs_queue.isuxportal-activejob-dev.arn,
      aws_sqs_queue.isuxportal-activejob-dlq-dev.arn,
    ]
  }
}
