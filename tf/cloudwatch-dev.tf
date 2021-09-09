resource "aws_cloudwatch_metric_alarm" "ecs-scaling-out-worker-autoscaling-service-dev" {
  alarm_name                = "ecs-scaling-out-worker-autoscaling-service-dev"
  comparison_operator       = "GreaterThanOrEqualToThreshold"
  evaluation_periods        = "1"
  metric_name               = "ApproximateNumberOfMessagesVisible"
  namespace                 = "AWS/SQS"
  dimensions                = {
    QueueName = aws_sqs_queue.isuxportal-activejob-dev.name
  }
  period                    = "60"
  statistic                 = "Average"
  threshold                 = "20"
  alarm_description         = "This metric monitors sqs ApproximateNumberOfMessagesVisible count"

  lifecycle {
    ignore_changes = [
      alarm_actions, // Ignore changes by hako
    ]
  }
}

resource "aws_cloudwatch_metric_alarm" "ecs-scaling-in-worker-autoscaling-service-dev" {
  alarm_name                = "ecs-scaling-in-worker-autoscaling-service-dev"
  comparison_operator       = "LessThanThreshold"
  evaluation_periods        = "1"
  metric_name               = "ApproximateNumberOfMessagesVisible"
  namespace                 = "AWS/SQS"
  dimensions                = {
    QueueName = aws_sqs_queue.isuxportal-activejob-dev.name
  }
  period                    = "60"
  statistic                 = "Average"
  threshold                 = "20"
  alarm_description         = "This metric monitors sqs ApproximateNumberOfMessagesVisible count"

  lifecycle {
    ignore_changes = [
      alarm_actions, // Ignore changes by hako
    ]
  }
}
