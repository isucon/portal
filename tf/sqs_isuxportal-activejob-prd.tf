resource "aws_sqs_queue" "isuxportal-activejob-prd" {
  name = "isuxportal-activejob-prd"

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.isuxportal-activejob-dlq-prd.arn
    maxReceiveCount     = 10
  })

  tags = {
    Project     = "isucon10"
    Environment = "production"
  }
}


resource "aws_sqs_queue" "isuxportal-activejob-dlq-prd" {
  name = "isuxportal-activejob-dlq-prd"

  tags = {
    Project     = "isucon10"
    Environment = "production"
  }
}
