resource "aws_key_pair" "prometheus" {
  key_name   = "isucon-prometheus"
  public_key = file("~/.ssh/id_rsa.pub")
}

resource "aws_instance" "prometheus" {
  ami                    = "ami-0827d8ed0295e3feb"
  vpc_security_group_ids = [aws_security_group.prometheus.id]
  subnet_id              = aws_subnet.private[0].id
  key_name               = aws_key_pair.prometheus.id
  instance_type          = "m5.large"
  iam_instance_profile   = aws_iam_instance_profile.ec2-monitoring-profile.name
}
