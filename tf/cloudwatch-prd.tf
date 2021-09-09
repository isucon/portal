resource "aws_cloudwatch_metric_alarm" "ecs-scaling-out-worker-autoscaling-service-prd" {
  alarm_name                = "ecs-scaling-out-worker-autoscaling-service-prd"
  comparison_operator       = "GreaterThanOrEqualToThreshold"
  evaluation_periods        = "1"
  metric_name               = "ApproximateNumberOfMessagesVisible"
  namespace                 = "AWS/SQS"
  dimensions                = {
    QueueName = aws_sqs_queue.isuxportal-activejob-prd.name
  }
  period                    = "60"
  statistic                 = "Average"
  threshold                 = "20"
  alarm_description         = "This metric monitors sqs ApproximateNumberOfMessagesVisible count"
  alarm_actions             = [
    aws_sns_topic.isuxportal-topic-prd.arn
  ]
}

resource "aws_cloudwatch_metric_alarm" "ecs-scaling-in-worker-autoscaling-service-prd" {
  alarm_name                = "ecs-scaling-in-worker-autoscaling-service-prd"
  comparison_operator       = "LessThanThreshold"
  evaluation_periods        = "1"
  metric_name               = "ApproximateNumberOfMessagesVisible"
  namespace                 = "AWS/SQS"
  dimensions                = {
    QueueName = aws_sqs_queue.isuxportal-activejob-prd.name
  }
  period                    = "60"
  statistic                 = "Average"
  threshold                 = "20"
  alarm_description         = "This metric monitors sqs ApproximateNumberOfMessagesVisible count"
}
