resource "aws_iam_role" "IsuconChatbotDev" {
  name                 = "IsuconChatbotDevRole"
  description          = "IsuconChatbotDevRole"
  assume_role_policy   = data.aws_iam_policy_document.IsuconChatbotDev-trust.json
  permissions_boundary = aws_iam_policy.IsuAdmin.arn
}

data "aws_iam_policy_document" "IsuconChatbotDev-trust" {
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

resource "aws_iam_policy" "IsuconChatbotDev" {
  name        = "IsuconChatbotDevPolicy"
  description = "IsuconChatbotDevPolicy"
  policy      = data.aws_iam_policy_document.IsuconChatbotDev.json
}

resource "aws_iam_role_policy_attachment" "IsuconChatbotDev-Cloudwatch" {
  role       = aws_iam_role.IsuconChatbotDev.name
  policy_arn = aws_iam_policy.IsuconChatbotDev.arn
}

data "aws_iam_policy_document" "IsuconChatbotDev" {
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

