resource "aws_key_pair" "bastion" {
  key_name   = "isucon-bastion"
  public_key = file("~/.ssh/id_rsa.pub")
}

resource "aws_instance" "bastion" {
  ami                    = "ami-0827d8ed0295e3feb"
  vpc_security_group_ids = [aws_security_group.bastion.id]
  subnet_id              = aws_subnet.public[0].id
  key_name               = aws_key_pair.bastion.id
  instance_type          = "t2.micro"
}

resource "aws_eip" "bastion" {
  instance = aws_instance.bastion.id
  vpc      = true
}
