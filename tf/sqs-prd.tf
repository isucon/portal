resource "aws_sqs_queue" "isuxportal-activejob-dlq-prd" {
  name = "isuxportal-activejob-dlq-prd"
}

resource "aws_sqs_queue" "isuxportal-activejob-prd" {
  name = "isuxportal-activejob-prd"

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.isuxportal-activejob-dlq-prd.arn
    maxReceiveCount     = 10
  })
}

