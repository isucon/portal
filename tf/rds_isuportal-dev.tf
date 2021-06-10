variable mysql_master_username {}
variable mysql_master_password {}

resource "aws_rds_cluster" "isuxportal-dev" {
  cluster_identifier              = "isuxportal-dev"
  master_username                 = var.mysql_master_username
  master_password                 = var.mysql_master_password
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
    "arn:aws:iam::${var.aws_account_id}:role/aws-service-role/rds.amazonaws.com/AWSServiceRoleForRDS",
  ]

  enabled_cloudwatch_logs_exports = [
    "slowquery",
  ]
}


