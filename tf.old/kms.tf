resource "aws_kms_key" "isucon10" {
  description             = "isucon10"
  deletion_window_in_days = 10
  tags = {
    Project = "isucon10"
  }
}

resource "aws_kms_alias" "isucon10" {
  name          = "alias/isucon10"
  target_key_id = aws_kms_key.isucon10.key_id
}
