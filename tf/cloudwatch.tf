resource "aws_cloudwatch_metric_alarm" "isuxportal-sqs-alarm-dev" {
  alarm_name                = "isuxportal-sqs-alaram-dev"
  comparison_operator       = "GreaterThanOrEqualToThreshold"
  evaluation_periods        = "1"
  metric_name               = "ApproximateNumberOfMessagesVisible"
  namespace                 = "AWS/SQS"
  dimensions                = {
    QueueName = aws_sqs_queue.isuxportal-activejob-dev.name
  }
  period                    = "60"
  statistic                 = "Average"
  threshold                 = "100"
  alarm_description         = "This metric monitors sqs ApproximateNumberOfMessagesVisible count"
  alarm_actions             = [
    aws_sns_topic.isuxportal-topic-dev.arn
  ]
}
