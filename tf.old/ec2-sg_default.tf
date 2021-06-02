resource "aws_security_group" "default" {
  vpc_id      = aws_vpc.main.id
  name        = "default"
  description = "default VPC security group"

  tags = {
    Project = "isucon10"
  }
}

resource "aws_security_group_rule" "default-ingress_icmp" {
  security_group_id = aws_security_group.default.id
  type              = "ingress"
  protocol          = "icmp"
  from_port         = -1
  to_port           = -1
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
}

resource "aws_security_group_rule" "default-ingress_ssh" {
  security_group_id        = aws_security_group.default.id
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 22
  to_port                  = 22
  source_security_group_id = aws_security_group.bastion.id
}

resource "aws_security_group_rule" "default-egress_all" {
  security_group_id = aws_security_group.default.id
  type              = "egress"
  protocol          = "all"
  from_port         = 0
  to_port           = 0
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
}

resource "aws_security_group_rule" "default-ingress_prometheus" {
  security_group_id        = aws_security_group.default.id
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 9099
  to_port                  = 9100
  source_security_group_id = aws_security_group.prometheus.id
}

