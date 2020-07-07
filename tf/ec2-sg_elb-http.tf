resource "aws_security_group" "elb-http" {
  vpc_id      = aws_vpc.main.id
  name        = "elb-http"
  description = "elb-http VPC security group"

  tags = {
    Project = "isucon10"
  }
}

#resource "aws_security_group_rule" "elb-http-ingress_http" {
#  security_group_id = aws_security_group.elb-http.id
#  type              = "ingress"
#  protocol          = "tcp"
#  from_port         = 80
#  to_port           = 80
#  cidr_blocks       = ["0.0.0.0/0"]
#  ipv6_cidr_blocks  = ["::/0"]
#}

resource "aws_security_group_rule" "elb-http-ingress_https" {
  security_group_id = aws_security_group.elb-http.id
  type              = "ingress"
  protocol          = "tcp"
  from_port         = 443
  to_port           = 443
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
}

resource "aws_security_group_rule" "elb-http-egress_all" {
  security_group_id = aws_security_group.elb-http.id
  type              = "egress"
  protocol          = "all"
  from_port         = 0
  to_port           = 0
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
}
