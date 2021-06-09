resource "aws_iam_role" "IsuAdmin" {
  name                 = "IsuAdmin"
  description          = "isuadmin"
  assume_role_policy   = data.aws_iam_policy_document.isuadmin-trust.json
  max_session_duration = 43200
}

data "aws_iam_policy_document" "isuadmin-trust" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type = "AWS"
      identifiers = [
        "arn:aws:iam::245943874622:root", // SELF
        "arn:aws:iam::789035092620:root", // cookpad2
      ]
    }
  }
}

resource "aws_iam_role_policy_attachment" "IsuAdmin-IsuAdmin" {
  role       = aws_iam_role.IsuAdmin.name
  policy_arn = aws_iam_policy.IsuAdmin.arn
}

resource "aws_iam_policy" "IsuAdmin" {
  name        = "IsuAdmin"
  description = "isuadmin"
  policy      = data.aws_iam_policy_document.isuadmin.json
}

data "aws_iam_policy_document" "isuadmin" {
  statement {
    effect = "Allow"
    not_actions = [
      "iam:AttachRolePolicy",
      "iam:CreateRole",
      "iam:DeleteRolePolicy",
      "iam:DetachRolePolicy",
      "iam:PutRolePolicy",

      "iam:CreateUser",
      "iam:PutUserPolicy",
      "iam:AttachUserPolicy",
      "iam:DeleteUserPolicy",

      "iam:PutRolePermissionsBoundary",
      "iam:PutUserPermissionsBoundary",
    ]
    resources = ["*"]
  }

  statement {
    actions = [
      "iam:AttachRolePolicy",
      "iam:CreateRole",
      "iam:DeleteRolePolicy",
      "iam:DetachRolePolicy",
      "iam:PutRolePolicy",

      "iam:CreateUser",
      "iam:PutUserPolicy",
      "iam:AttachUserPolicy",
      "iam:DeleteUserPolicy",
    ]

    resources = ["*"]

    condition {
      test     = "ArnEquals"
      variable = "iam:PermissionsBoundary"

      # Cannot use aws_iam_policy.*.arn because of cyclic
      values = ["arn:aws:iam::245943874622:policy/IsuAdmin"]
    }
  }

  statement {
    effect = "Deny"
    actions = [
      "iam:Delete*",
      "iam:Update*",
      "iam:Detach*",
      "iam:Attach*",
      "iam:Create*",
    ]

    not_resources = [
      aws_iam_role.IsuAdmin.arn,
      "arn:aws:iam::245943874622:role/Admin",
      "arn:aws:iam::245943874622:policy/IsuAdmin", # Cannot use aws_iam_policy.*.arn because of cyclic
    ]
  }

  statement {
    effect = "Deny"
    actions = [
      "cloudtrail:Delete*",
      "cloudtrail:Put*",
      "cloudtrail:Start*",
      "cloudtrail:Stop*",
      "cloudtrail:Update*",
    ]
    resources = [
      "*",
    ]
  }

  statement {
    effect = "Deny"
    actions = [
      "s3:DeleteObject*",
      "s3:PutObject*",
    ]
    resources = [
      "arn:aws:s3:::isucon11-cloudtrail",
      "arn:aws:s3:::isucon11-cloudtrail/*",
    ]
  }
}

