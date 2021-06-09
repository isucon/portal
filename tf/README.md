# ISUCON Terraform用 README

## 全体構成

### VPC / RDS / Elasticache (ipv4)
ap-northeast-1の各AZに1public subnet,1private subnetを配置

NATgatewayについてはap-northeast-1cに配置
![VPC/RDS/Elasticache構成](images/aws_terraform_vpc_rds_elasticache.png?raw=true "VPC/RDS/Elasticache構成")

## Terraform実行のための事前準備
### Terraform backend設定
Terraformを実行するためには以下のリソースをAWS上に作成する必要がある。
* S3 Bucket : tfstateを保存する先。
* DynamoDB Table : Consistencyを担保するためのTable。Table名は任意だが、Partition Keyは”LockID”で作成すること。

![AWS Terraform Backend Image](images/aws_terraform_backend.png?raw=true "AWS Terraform Backend")
