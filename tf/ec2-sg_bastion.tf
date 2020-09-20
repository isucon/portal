resource "aws_security_group" "bastion" {
  vpc_id      = aws_vpc.main.id
  name        = "bastion"
  description = "bastion VPC security group"

  tags = {
    Project = "isucon10"
  }
}

resource "aws_security_group_rule" "bastion-ingress_ssh" {
  security_group_id = aws_security_group.bastion.id
  type              = "ingress"
  protocol          = "tcp"
  from_port         = 9922
  to_port           = 9922
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
}

resource "aws_security_group_rule" "bastion-ingress_wg" {
  security_group_id = aws_security_group.bastion.id
  type              = "ingress"
  protocol          = "udp"
  from_port         = 51820
  to_port           = 51820
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
}
