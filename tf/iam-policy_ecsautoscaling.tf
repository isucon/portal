resource "aws_iam_policy" "EcsAutoScaling" {
  name        = "ecsAutoscaleRole"
  description = "ecsAutoscaleRole"
  policy      = data.aws_iam_policy_document.EcsAutoScaling.json
}

data "aws_iam_policy_document" "EcsAutoScaling" {
  statement {
    effect = "Allow"
    actions = [
      "application-autoscaling:*",
      "ecs:DescribeServices",
      "ecs:UpdateService",
      "cloudwatch:DescribeAlarms",
      "cloudwatch:PutMetricAlarm",
      "cloudwatch:DeleteAlarms",
      "cloudwatch:DescribeAlarmHistory",
      "cloudwatch:DescribeAlarmsForMetric",
      "cloudwatch:GetMetricStatistics",
      "cloudwatch:ListMetrics",
      "cloudwatch:DisableAlarmActions",
      "cloudwatch:EnableAlarmActions",
      "iam:CreateServiceLinkedRole",
      "sns:CreateTopic",
      "sns:Subscribe",
      "sns:Get*",
      "sns:List*"
    ]
    resources = [
      "*"
    ]
  }
}

