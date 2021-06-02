resource "aws_security_group" "prometheus" {
  vpc_id      = aws_vpc.main.id
  name        = "prometheus"
  description = "prometheus VPC security group"

  tags = {
    Project = "isucon10"
  }
}
