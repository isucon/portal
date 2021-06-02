resource "aws_security_group" "mysql" {
  vpc_id      = aws_vpc.main.id
  name        = "mysql"
  description = "mysql VPC security group"

  tags = {
    Project = "isucon10"
  }
}

resource "aws_security_group_rule" "mysql-ingress_mysql_http" {
  security_group_id        = aws_security_group.mysql.id
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 3306
  to_port                  = 3306
  source_security_group_id = aws_security_group.http.id
}
resource "aws_security_group_rule" "mysql-ingress_mysql_bastion" {
  security_group_id        = aws_security_group.mysql.id
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 3306
  to_port                  = 3306
  source_security_group_id = aws_security_group.bastion.id
}

resource "aws_security_group_rule" "mysql-egress_all" {
  security_group_id = aws_security_group.mysql.id
  type              = "egress"
  protocol          = "all"
  from_port         = 0
  to_port           = 0
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
}
