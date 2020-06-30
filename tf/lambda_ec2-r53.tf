# https://github.com/sorah/ec2-r53

data "aws_lambda_function" "ec2-r53" {
  function_name = "ec2-r53_run"
}

resource "aws_cloudwatch_event_rule" "ec2-r53-state" {
  name        = "ec2-r53-state"
  description = "ec2-r53-state"

  event_pattern = <<PATTERN
{
  "source": [
    "aws.ec2"
  ],
  "detail-type": [
    "EC2 Instance State-change Notification"
  ]
}
PATTERN
}

resource "aws_cloudwatch_event_target" "ec2-r53-state" {
  rule      = aws_cloudwatch_event_rule.ec2-r53-state.name
  target_id = "ec2-r53"
  arn       = data.aws_lambda_function.ec2-r53.arn
}

resource "aws_lambda_permission" "ec2-r53-cwe-state" {
  action        = "lambda:InvokeFunction"
  function_name = data.aws_lambda_function.ec2-r53.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.ec2-r53-state.arn
}

resource "aws_cloudwatch_event_rule" "ec2-r53-tags" {
  name        = "ec2-r53-tags"
  description = "ec2-r53-tags"

  event_pattern = <<PATTERN
{
  "source": [
    "aws.ec2"
  ],
  "detail-type": [
    "AWS API Call via CloudTrail"
  ],
  "detail": {
    "eventSource": [
      "ec2.amazonaws.com"
    ],
    "eventName": [
      "CreateTags",
      "DeleteTags"
    ]
  }
}
PATTERN
}

resource "aws_cloudwatch_event_target" "ec2-r53-tags" {
  rule      = aws_cloudwatch_event_rule.ec2-r53-tags.name
  target_id = "ec2-r53"
  arn       = data.aws_lambda_function.ec2-r53.arn
}

resource "aws_lambda_permission" "ec2-r53-cwe-tags" {
  action        = "lambda:InvokeFunction"
  function_name = data.aws_lambda_function.ec2-r53.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.ec2-r53-tags.arn
}
