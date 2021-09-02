resource "aws_sqs_queue" "isuxportal-activejob-dlq-pre" {
  name = "isuxportal-activejob-dlq-pre"
}

resource "aws_sqs_queue" "isuxportal-activejob-pre" {
  name = "isuxportal-activejob-pre"

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.isuxportal-activejob-dlq-pre.arn
    maxReceiveCount     = 10
  })
}

