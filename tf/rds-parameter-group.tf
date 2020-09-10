resource "aws_db_parameter_group" "aurora57" {
  name        = "isux-aurora57"
  family      = "aurora-mysql5.7"
  description = "isux-aurora57"

  parameter {
    apply_method = "immediate"
    name         = "innodb_large_prefix"
    value        = "1"
  }

  parameter {
    apply_method = "immediate"
    name         = "long_query_time"
    value        = "0.5"
  }

  parameter {
    apply_method = "immediate"
    name         = "slow_launch_time"
    value        = "1"
  }

  parameter {
    apply_method = "immediate"
    name         = "slow_query_log"
    value        = "1"
  }

  parameter {
    apply_method = "pending-reboot"
    name         = "query_cache_type"
    value        = "0"
  }

  parameter {
    apply_method = "immediate"
    name         = "max_connections"
    value        = "2000"
  }

  tags = {
    Project = "isucon10"
  }
}

resource "aws_rds_cluster_parameter_group" "aurora57" {
  name        = "isux-aurora57"
  family      = "aurora-mysql5.7"
  description = "isux-aurora57"

  parameter {
    apply_method = "immediate"
    name         = "character_set_client"
    value        = "utf8mb4"
  }

  parameter {
    apply_method = "immediate"
    name         = "character_set_connection"
    value        = "utf8mb4"
  }

  parameter {
    apply_method = "immediate"
    name         = "character_set_database"
    value        = "utf8mb4"
  }

  parameter {
    apply_method = "immediate"
    name         = "character_set_filesystem"
    value        = "utf8mb4"
  }

  parameter {
    apply_method = "immediate"
    name         = "character_set_results"
    value        = "utf8mb4"
  }

  parameter {
    apply_method = "immediate"
    name         = "character_set_server"
    value        = "utf8mb4"
  }

  parameter {
    apply_method = "immediate"
    name         = "collation_connection"
    value        = "utf8mb4_general_ci"
  }

  parameter {
    apply_method = "pending-reboot"
    name         = "innodb_file_per_table"
    value        = "1"
  }

  parameter {
    apply_method = "pending-reboot"
    name         = "query_cache_type"
    value        = "0"
  }

  tags = {
    Project = "isucon10"
  }
}
