resource "aws_elasticache_subnet_group" "isux" {
  name        = "isux"
  description = "isux"

  subnet_ids = [
    aws_subnet.b_public.id,
    aws_subnet.c_public.id,
    aws_subnet.d_public.id,
  ]
}

