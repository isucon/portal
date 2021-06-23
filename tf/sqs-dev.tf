resource "aws_sqs_queue" "isuxportal-activejob-dlq-dev" {
  name = "isuxportal-activejob-dlq-dev"
}

resource "aws_sqs_queue" "isuxportal-activejob-dev" {
  name = "isuxportal-activejob-dev"

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.isuxportal-activejob-dlq-dev.arn
    maxReceiveCount     = 10
  })
}

