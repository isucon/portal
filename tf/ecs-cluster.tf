resource "aws_ecs_cluster" "fargate" {
  name               = "isux-fargate"
  capacity_providers = ["FARGATE", "FARGATE_SPOT"]
  tags = {
    Project = "isucon10"
  }
}

