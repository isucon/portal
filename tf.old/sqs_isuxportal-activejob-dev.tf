resource "aws_sqs_queue" "isuxportal-activejob-dev" {
  name = "isuxportal-activejob-dev"

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.isuxportal-activejob-dlq-dev.arn
    maxReceiveCount     = 10
  })

  tags = {
    Project     = "isucon10"
    Environment = "development"
  }
}


resource "aws_sqs_queue" "isuxportal-activejob-dlq-dev" {
  name = "isuxportal-activejob-dlq-dev"

  tags = {
    Project     = "isucon10"
    Environment = "development"
  }
}
