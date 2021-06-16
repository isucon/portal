resource "aws_kms_key" "isuxportal" {
  description             = "isuxportal"
  deletion_window_in_days = 10
}

resource "aws_kms_alias" "isuxportal" {
  name          = "alias/isuxportal"
  target_key_id = aws_kms_key.isuxportal.key_id
}

