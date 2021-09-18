resource "aws_key_pair" "bastion-back" {
  key_name   = "isucon-bastion-back"
  public_key = file("~/.ssh/id_rsa.pub")

  lifecycle {
    ignore_changes = [
      public_key,
    ]
  }
}

resource "aws_instance" "bastion-back" {
  ami                    = "ami-0827d8ed0295e3feb"
  vpc_security_group_ids = [aws_security_group.bastion.id]
  subnet_id              = aws_subnet.public[0].id
  key_name               = aws_key_pair.bastion-back.id
  instance_type          = "t3.medium"

  tags = {
    Name = "isucon11-bastion-back"
  }
}

resource "aws_eip" "bastion-back" {
  instance = aws_instance.bastion-back.id
  vpc      = true
}
