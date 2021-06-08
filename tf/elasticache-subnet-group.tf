resource "aws_elasticache_subnet_group" "isuxi" {
  name        = "isuxi"
  description = "isuxi"

  subnet_ids = aws_subnet.private.*.id
}
