resource "aws_ecs_cluster" "fargate" {
  name = "isux-fargate"
  tags = {
    Project = "isucon10"
  }
}

