resource "aws_rds_cluster" "isuxportal-dev" {
  cluster_identifier              = "isuxportal-dev"
  master_username                 = "root"
  master_password                 = random_password.isuxportal-rds-dev.result
  backup_retention_period         = 20
  db_cluster_parameter_group_name = aws_rds_cluster_parameter_group.aurora57.name
  db_subnet_group_name            = aws_db_subnet_group.isuxportal.name
  engine                          = "aurora-mysql"
  engine_version                  = "5.7.mysql_aurora.2.08.1"
  preferred_backup_window         = "15:00-15:30"
  preferred_maintenance_window    = "tue:17:00-tue:17:30"
  apply_immediately               = true
  skip_final_snapshot             = true
  deletion_protection             = false

  vpc_security_group_ids = [
    aws_security_group.default.id,
    aws_security_group.mysql.id,
  ]

  iam_roles = [
    aws_iam_service_linked_role.AWSServiceRoleForRDS.arn,
  ]

  enabled_cloudwatch_logs_exports = [
    "slowquery",
  ]
}

resource "random_password" "isuxportal-rds-dev" {
  length           = 16
  special          = true
  override_special = "_%@"
}

resource "aws_iam_service_linked_role" "AWSServiceRoleForRDS" {
  aws_service_name = "rds.amazonaws.com"
}

