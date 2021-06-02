locals {
  isuadmin_users = toset([
    "whywaita",
  ])
}

resource "aws_iam_user" "isuadmin-users" {
  for_each = local.isuadmin_users

  name                 = each.value
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
  tags = {
    Project = "isucon10"
  }
}

resource "aws_iam_user_policy_attachment" "isuadmin-users" {
  for_each   = local.isuadmin_users
  user       = each.value
  policy_arn = aws_iam_policy.isuadmin-user.arn
}

resource "aws_iam_policy" "isuadmin-user" {
  name   = "isuadmin-user"
  policy = data.aws_iam_policy_document.isuadmin-user.json
}

data "aws_iam_policy_document" "isuadmin-user" {
  statement {
    effect = "Allow"
    actions = [
      "iam:GetAccountPasswordPolicy",
      "iam:GetAccountSummary",
      "iam:ListVirtualMFADevices"
    ]
    resources = ["*"]
  }
  statement {
    effect = "Allow"
    actions = [
      "iam:ChangePassword",
      "iam:GetUser",
      "iam:CreateAccessKey",
      "iam:DeleteAccessKey",
      "iam:ListAccessKeys",
      "iam:UpdateAccessKey",
      "iam:CreateVirtualMFADevice",
      "iam:DeleteVirtualMFADevice",
      "iam:DeactivateMFADevice",
      "iam:EnableMFADevice",
      "iam:ListMFADevices",
      "iam:ResyncMFADevice",
    ]
    resources = [
      "arn:aws:iam::*:user/$${aws:username}",
      "arn:aws:iam::*:mfa/$${aws:username}",
    ]
  }
  statement {
    effect = "Allow"
    actions = [
      "sts:AssumeRole",
    ]
    resources = [
      aws_iam_role.IsuAdmin.arn,
    ]
    condition {
      test     = "Bool"
      variable = "aws:MultiFactorAuthPresent"
      values   = ["true"]
    }
  }
}

