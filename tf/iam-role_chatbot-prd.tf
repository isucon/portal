resource "aws_iam_role" "IsuconChatbotPrd" {
  name                 = "IsuconChatbotPrdRole"
  description          = "IsuconChatbotPrdRole"
  assume_role_policy   = data.aws_iam_policy_document.IsuconChatbotPrd-trust.json
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
}

data "aws_iam_policy_document" "IsuconChatbotPrd-trust" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type = "Service"
      identifiers = [
        "chatbot.amazonaws.com",
      ]
    }
  }
}

resource "aws_iam_policy" "IsuconChatbotPrd" {
  name        = "IsuconChatbotPrdPolicy"
  description = "IsuconChatbotPrdPolicy"
  policy      = data.aws_iam_policy_document.IsuconChatbotPrd.json
}

resource "aws_iam_role_policy_attachment" "IsuconChatbotPrd-Cloudwatch" {
  role       = aws_iam_role.IsuconChatbotPrd.name
  policy_arn = aws_iam_policy.IsuconChatbotPrd.arn
}

data "aws_iam_policy_document" "IsuconChatbotPrd" {
  statement {
    effect = "Allow"
    actions = [
      "cloudwatch:Describe*",
      "cloudwatch:Get*",
      "cloudwatch:List*"
    ]
    resources = [
      "*"
    ]
  }
}

