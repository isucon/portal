resource "aws_security_group" "redis" {
  vpc_id      = aws_vpc.main.id
  name        = "redis"
  description = "redis VPC security group"

  tags = {
    Project = "isucon10"
  }
}

resource "aws_security_group_rule" "redis-ingress_redis_http" {
  security_group_id        = aws_security_group.redis.id
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 6379
  to_port                  = 6379
  source_security_group_id = aws_security_group.http.id
}
resource "aws_security_group_rule" "redis-ingress_redis_bastion" {
  security_group_id        = aws_security_group.redis.id
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 6379
  to_port                  = 6379
  source_security_group_id = aws_security_group.bastion.id
}
resource "aws_security_group_rule" "redis-ingress_redis_self" {
  security_group_id        = aws_security_group.redis.id
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 6379
  to_port                  = 6379
  source_security_group_id = aws_security_group.redis.id
}

resource "aws_security_group_rule" "redis-egress_all" {
  security_group_id = aws_security_group.redis.id
  type              = "egress"
  protocol          = "all"
  from_port         = 0
  to_port           = 0
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
}
