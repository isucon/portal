resource "aws_security_group" "http" {
  vpc_id      = aws_vpc.main.id
  name        = "http"
  description = "http VPC security group"

  tags = {
    Project = "isucon10"
  }
}

resource "aws_security_group_rule" "http-ingress_http_elb-http" {
  security_group_id        = aws_security_group.http.id
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 80
  to_port                  = 80
  source_security_group_id = aws_security_group.elb-http.id
}
resource "aws_security_group_rule" "http-ingress_https_elb-http" {
  security_group_id        = aws_security_group.http.id
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 443
  to_port                  = 443
  source_security_group_id = aws_security_group.elb-http.id
}
resource "aws_security_group_rule" "http-ingress_http_elb-http8000-public" {
  security_group_id = aws_security_group.http.id
  type              = "ingress"
  protocol          = "tcp"
  from_port         = 8000
  to_port           = 8000
  cidr_blocks       = ["0.0.0.0/0"]
}
resource "aws_security_group_rule" "http-ingress_http_bastion" {
  security_group_id        = aws_security_group.http.id
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 80
  to_port                  = 80
  source_security_group_id = aws_security_group.bastion.id
}
resource "aws_security_group_rule" "http-ingress_https_bastion" {
  security_group_id        = aws_security_group.http.id
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 443
  to_port                  = 443
  source_security_group_id = aws_security_group.bastion.id
}

resource "aws_security_group_rule" "http-egress_all" {
  security_group_id = aws_security_group.http.id
  type              = "egress"
  protocol          = "all"
  from_port         = 0
  to_port           = 0
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
}
