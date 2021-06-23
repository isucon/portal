resource "aws_iam_role" "rds-monitoring-role" {
  name                 = "rds-monitoring-role"
  description          = "rds-monitoring-role"
  assume_role_policy   = data.aws_iam_policy_document.rds-monitoring-role-trust.json
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
}

data "aws_iam_policy_document" "rds-monitoring-role-trust" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type = "Service"
      identifiers = [
        "monitoring.rds.amazonaws.com",
      ]
    }
  }
}
resource "aws_iam_role_policy_attachment" "rds-monitoring-role" {
  role       = aws_iam_role.rds-monitoring-role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonRDSEnhancedMonitoringRole"
}

