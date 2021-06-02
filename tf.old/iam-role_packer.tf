resource "aws_iam_role" "IsuPacker" {
  name                 = "IsuPacker"
  description          = "packer"
  assume_role_policy   = data.aws_iam_policy_document.packer-trust.json
  max_session_duration = 43200
}

data "aws_iam_policy_document" "packer-trust" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole", "sts:TagSession"]
    principals {
      type = "AWS"
      identifiers = [
        "arn:aws:iam::516315029474:root", // SELF
      ]
    }
  }
}

resource "aws_iam_role_policy_attachment" "IsuPacker-IsuPacker" {
  role       = aws_iam_role.IsuPacker.name
  policy_arn = aws_iam_policy.IsuPacker.arn
}

resource "aws_iam_policy" "IsuPacker" {
  name        = "IsuPacker"
  description = "packer"
  policy      = data.aws_iam_policy_document.packer.json
}

data "aws_iam_policy_document" "packer" {
  statement {
    effect = "Allow"
    actions = [
      "ec2:DescribeImageAttribute",
      "ec2:DescribeImages",
      "ec2:DescribeInstances",
      "ec2:DescribeInstanceStatus",
      "ec2:DescribeRegions",
      "ec2:DescribeSecurityGroups",
      "ec2:DescribeSnapshots",
      "ec2:DescribeSubnets",
      "ec2:DescribeTags",
      "ec2:DescribeVolumes",
      "ec2:DetachVolume",
      "ec2:DescribeSpotPriceHistory",
      "ec2:DescribeVpcs",
      "ec2:DescribeFleet*",

      "ec2:CreateFleet",
      "ec2:RequestSpot*",
      "ec2:DeleteFleets",
      "ec2:CancelSpot*",

      "ec2:CreateImage",
      "ec2:CreateSnapshot",
      "ec2:CreateVolume",
      "ec2:RegisterImage",
      "ec2:ModifyImageAttribute",
      "ec2:ModifyInstanceAttribute",
      "ec2:ModifySnapshotAttribute",
      "ec2:RegisterImage",
      "ec2:DeregisterImage",

      "ec2:AuthorizeSecurityGroupIngress",
      "ec2:CreateSecurityGroup",
      "ec2:DeleteSecurityGroup",

      "ec2:CreateKeypair",
      "ec2:DeleteKeyPair",

      "ec2:CreateLaunchTemplate",
      "ec2:DeleteLaunchTemplate",

      "ec2:RunInstances",
    ]
    resources = ["*"]
  }
  statement {
    effect = "Allow"
    actions = [
      "ec2:DeleteSnapshot",
      "ec2:DeleteVolume",
      "ec2:StopInstances",
      "ec2:TerminateInstances"
    ]
    resources = ["*"]
    condition {
      test     = "StringEquals"
      variable = "aws:ResourceTag/Packer"
      values   = ["1"]
    }
  }

  statement {
    effect = "Allow"
    actions = [
      "ec2:RunInstances",
      "ec2:RequestSpot*",
    ]
    resources = ["*"]
  }
  statement {
    effect = "Allow"
    actions = [
      "s3:ListBucket",
      "s3:PutObject",
      "s3:DeleteObject",
      "s3:GetObject",
    ]
    resources = [
      aws_s3_bucket.isucon10-machine-images.arn,
      "${aws_s3_bucket.isucon10-machine-images.arn}/*",
    ]
  }
  statement {
    effect = "Allow"
    actions = [
      "s3:PutObject",
      "s3:GetObject",
    ]
    resources = [
      "arn:aws:s3:::isucon10-misc/actions_cache/*",
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "ec2:CreateTags",
    ]
    resources = ["*"]
    condition {
      test     = "StringEquals"
      variable = "ec2:CreateAction"
      values   = ["RunInstances", "CreateImage", "CreateSnapshot", "CreateVolume"]
    }
  }
  statement {
    effect = "Allow"
    actions = [
      "ec2:CreateTags",
    ]
    resources = [
      "arn:aws:ec2:*:*:instance/*",
      "arn:aws:ec2:*:*:volume/*",
      "arn:aws:ec2:*:*:image/*",
      "arn:aws:ec2:*:*:snapshot/*",
    ]
    condition {
      test     = "Null"
      variable = "aws:ResourceTag/Name"
      values   = ["true"]
    }
  }
  statement {
    effect = "Allow"
    actions = [
      "ec2:CreateTags",
    ]
    resources = ["*"]
    condition {
      test     = "StringEquals"
      variable = "aws:ResourceTag/Packer"
      values   = ["1"]
    }
  }
}

