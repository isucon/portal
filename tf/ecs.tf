resource "aws_ecs_cluster" "fargate" {
  name               = "isuxi-fargate"
  capacity_providers = ["FARGATE", "FARGATE_SPOT"]
}
