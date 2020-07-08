resource "aws_iam_policy" "EcsTaskBase" {
  name = "EcsTaskBase"
  description = "ecstaskbase"
  policy = data.aws_iam_policy_document.EcsTaskBase.json
}

data "aws_iam_policy_document" "EcsTaskBase" {
  statement {
    // hako-nginx
    effect = "Allow"
    actions = [
      "s3:GetObject"
    ]
    resources = ["arn:aws:s3:::isucon10-misc/hako/nginx-config/*"]
  }
}
