locals {
  sorah_guest_cidrs = ["192.50.220.176/29", "2001:df0:8500:a300::/56"]
}

resource "aws_iam_user" "ghaction-final" {
  name                 = "ghaction-final"
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
  tags = {
    Project = "isucon10"
  }
}

//resource "aws_iam_user_policy" "ghaction-final_packer" {
//  user   = aws_iam_user.ghaction-final.name
//  name   = "packer"
//  policy = data.aws_iam_policy_document.ghaction-final_packer.json
//}
//
//data "aws_iam_policy_document" "ghaction-final_packer" {
//  statement {
//    effect = "Allow"
//    actions = [
//      "ec2:DescribeImageAttribute",
//      "ec2:DescribeImages",
//      "ec2:DescribeInstances",
//      "ec2:DescribeInstanceStatus",
//      "ec2:DescribeRegions",
//      "ec2:DescribeSecurityGroups",
//      "ec2:DescribeSnapshots",
//      "ec2:DescribeSubnets",
//      "ec2:DescribeTags",
//      "ec2:DescribeVolumes",
//      "ec2:DetachVolume",
//      "ec2:DescribeSpotPriceHistory",
//      "ec2:DescribeVpcs",
//      "ec2:DescribeFleet*",
//
//      "ec2:CreateFleet",
//      "ec2:RequestSpot*",
//      "ec2:DeleteFleets",
//      "ec2:CancelSpot*",
//
//      "ec2:CreateImage",
//      "ec2:CreateSnapshot",
//      "ec2:CreateVolume",
//      "ec2:RegisterImage",
//      "ec2:ModifyImageAttribute",
//      "ec2:ModifyInstanceAttribute",
//      "ec2:ModifySnapshotAttribute",
//      "ec2:RegisterImage",
//      "ec2:DeregisterImage",
//
//      "ec2:AuthorizeSecurityGroupIngress",
//      "ec2:CreateSecurityGroup",
//      "ec2:DeleteSecurityGroup",
//
//      "ec2:CreateKeypair",
//      "ec2:DeleteKeyPair",
//
//      "ec2:CreateLaunchTemplate",
//      "ec2:DeleteLaunchTemplate",
//
//      "ec2:RunInstances",
//    ]
//    resources = ["*"]
//    condition {
//      test     = "IpAddress"
//      variable = "aws:SourceIp"
//      values   = local.sorah_guest_cidrs
//    }
//  }
//  statement {
//    effect = "Allow"
//    actions = [
//      "ec2:DeleteSnapshot",
//      "ec2:DeleteVolume",
//      "ec2:StopInstances",
//      "ec2:TerminateInstances"
//    ]
//    resources = ["*"]
//    condition {
//      test     = "StringEquals"
//      variable = "aws:ResourceTag/Packer"
//      values   = ["1"]
//    }
//    condition {
//      test     = "IpAddress"
//      variable = "aws:SourceIp"
//      values   = local.sorah_guest_cidrs
//    }
//  }
//
//  statement {
//    effect = "Allow"
//    actions = [
//      "ec2:CreateTags",
//    ]
//    resources = ["*"]
//    condition {
//      test     = "StringEquals"
//      variable = "ec2:CreateAction"
//      values   = ["RunInstances", "CreateImage", "CreateSnapshot", "CreateVolume"]
//    }
//  }
//  statement {
//    effect = "Allow"
//    actions = [
//      "ec2:RunInstances",
//      "ec2:RequestSpot*",
//    ]
//    resources = ["*"]
//    // TODO:
//    condition {
//      test     = "StringEquals"
//      variable = "aws:SourceIp"
//      values   = ["ec2fleet.amazonaws.com"]
//    }
//  }
//}


resource "aws_iam_user_policy" "ghaction-final_role" {
  user   = aws_iam_user.ghaction-final.name
  name   = "role"
  policy = data.aws_iam_policy_document.ghaction-final_role.json
}

data "aws_iam_policy_document" "ghaction-final_role" {
  statement {
    effect    = "Allow"
    actions   = ["sts:AssumeRole"]
    resources = [aws_iam_role.IsuPacker.arn]
    //condition {
    //  test     = "IpAddress"
    //  variable = "aws:SourceIp"
    //  values   = local.sorah_guest_cidrs
    //}
  }
  statement {
    effect    = "Allow"
    actions   = ["sts:TagSession"]
    resources = [aws_iam_role.IsuPacker.arn]
  }
}

resource "aws_iam_user_policy" "ghaction-final_s3" {
  user   = aws_iam_user.ghaction-final.name
  name   = "s3"
  policy = data.aws_iam_policy_document.ghaction-final_s3.json
}

data "aws_iam_policy_document" "ghaction-final_s3" {
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

    condition {
      test     = "IpAddress"
      variable = "aws:SourceIp"
      values   = local.sorah_guest_cidrs
    }
  }
}

