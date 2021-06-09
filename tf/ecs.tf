resource "aws_ecs_cluster" "isuxportal-fargate" {
  name               = "isuxportal-fargate"
  capacity_providers = ["FARGATE", "FARGATE_SPOT"]
}
