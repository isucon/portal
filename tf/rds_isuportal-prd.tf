resource "aws_rds_cluster" "isuxportal-prd" {
  cluster_identifier              = "isuxportal-prd"
  master_username                 = "root"
  master_password                 = "tonymoris"
  backup_retention_period         = 20
  db_cluster_parameter_group_name = aws_rds_cluster_parameter_group.aurora57.name
  db_subnet_group_name            = aws_db_subnet_group.isux.name
  engine                          = "aurora-mysql"
  engine_version                  = "5.7.mysql_aurora.2.08.1"
  preferred_backup_window         = "15:00-15:30"
  preferred_maintenance_window    = "tue:17:00-tue:17:30"
  apply_immediately               = true
  skip_final_snapshot             = false
  deletion_protection             = true

  vpc_security_group_ids = [
    aws_security_group.default.id,
    aws_security_group.mysql.id,
  ]

  tags = {
    Project = "isucon10"
  }

  iam_roles = [
    "arn:aws:iam::516315029474:role/aws-service-role/rds.amazonaws.com/AWSServiceRoleForRDS",
  ]

  enabled_cloudwatch_logs_exports = [
    "slowquery",
  ]
}

resource "aws_rds_cluster_instance" "isuportal-prd-001" {
  identifier                   = "isuportal-prd-001"
  cluster_identifier           = aws_rds_cluster.isuxportal-prd.cluster_identifier
  instance_class               = "db.t3.small"
  db_parameter_group_name      = aws_db_parameter_group.aurora57.name
  monitoring_role_arn          = aws_iam_role.rds-monitoring-role.arn
  engine                       = "aurora-mysql"
  engine_version               = "5.7.mysql_aurora.2.08.1"
  monitoring_interval          = 60
  auto_minor_version_upgrade   = false
  apply_immediately            = true
  promotion_tier               = "0"
  preferred_maintenance_window = "tue:17:00-tue:17:30"

  tags = {
    Project = "isucon10"
  }
}


