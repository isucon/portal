resource "aws_sqs_queue" "isuxportal-activejob-dlq" {
  name = "isuxportal-activejob-dlq"
}

resource "aws_sqs_queue" "isuxportal-activejob" {
  name = "isuxportal-activejob"

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.isuxportal-activejob-dlq.arn
    maxReceiveCount     = 10
  })
}

