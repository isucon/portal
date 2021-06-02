resource "aws_security_group" "ecs" {
  vpc_id      = aws_vpc.main.id
  name        = "ecs"
  description = "ecs VPC security group"

  tags = {
    Project = "isucon10"
  }
}

resource "aws_security_group_rule" "ecs-ingress_elb" {
  security_group_id        = aws_security_group.ecs.id
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 32768
  to_port                  = 42768
  source_security_group_id = aws_security_group.elb-http.id
}

resource "aws_security_group_rule" "ecs-ingress_self" {
  security_group_id = aws_security_group.ecs.id
  type              = "ingress"
  protocol          = "tcp"
  from_port         = 32768
  to_port           = 42768
  self              = true
}
