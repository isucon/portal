resource "aws_ecs_cluster" "isuportal-fargate" {
  name               = "isuportal-fargate"
  capacity_providers = ["FARGATE", "FARGATE_SPOT"]
}
