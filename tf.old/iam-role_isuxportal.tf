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



resource "aws_iam_role_policy" "Isuxportal" {
  role   = aws_iam_role.Isuxportal.name
  policy = data.aws_iam_policy_document.Isuxportal.json
}

data "aws_iam_policy_document" "Isuxportal" {
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

