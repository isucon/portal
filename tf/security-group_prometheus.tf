resource "aws_security_group" "prometheus" {
  vpc_id      = aws_vpc.main.id
  name        = "prometheus"
  description = "prometheus VPC security group"
}

#resource "aws_security_group_rule" "prometheus-ingress_ssh" {
#  security_group_id        = aws_security_group.prometheus.id
#  type                     = "ingress"
#  protocol                 = "tcp"
#  from_port                = 22
#  to_port                  = 22
#  source_security_group_id = aws_security_group.bastion.id
#}

resource "aws_security_group_rule" "prometheus-ingress_grafana" {
  security_group_id        = aws_security_group.prometheus.id
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 3000
  to_port                  = 3000
  source_security_group_id = aws_security_group.bastion.id
}

resource "aws_security_group_rule" "prometheus-egress_all" {
  security_group_id = aws_security_group.prometheus.id
  type              = "egress"
  protocol          = "all"
  from_port         = 0
  to_port           = 0
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
}
