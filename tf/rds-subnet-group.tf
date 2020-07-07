resource "aws_db_subnet_group" "isux" {
  name        = "isux"
  description = "isux"

  subnet_ids = [
    aws_subnet.b_private.id,
    aws_subnet.c_private.id,
    aws_subnet.d_private.id,
  ]
}

