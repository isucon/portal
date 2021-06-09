##########################################
# VPC
##########################################
resource "aws_vpc" "main" {
  cidr_block                       = "10.14.128.0/17"
  assign_generated_ipv6_cidr_block = true
  enable_dns_support               = true
  enable_dns_hostnames             = true
}

resource "aws_vpc_dhcp_options" "main" {
  domain_name         = "aws.xi.isucon.dev"
  domain_name_servers = ["AmazonProvidedDNS"]
  ntp_servers         = ["169.254.169.123"] # Amazon Time Sync
}
resource "aws_vpc_dhcp_options_association" "main" {
  vpc_id          = aws_vpc.main.id
  dhcp_options_id = aws_vpc_dhcp_options.main.id
}

resource "aws_egress_only_internet_gateway" "eigw" {
  vpc_id = aws_vpc.main.id
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id
}

##########################################
# Public Subnets
##########################################
variable "availability_zones" {
  type    = list(string)
  default = ["ap-northeast-1a", "ap-northeast-1c", "ap-northeast-1d"]
}

resource "aws_subnet" "public" {
  count = 3
  availability_zone = var.availability_zones[count.index]
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(aws_vpc.main.cidr_block, 3, 2 * count.index + 1)
  ipv6_cidr_block   = cidrsubnet(aws_vpc.main.ipv6_cidr_block, 8, 176 + count.index * 16)
  assign_ipv6_address_on_creation = true
  map_public_ip_on_launch         = true
  tags = {
    Name    = "${var.availability_zones[count.index]}-public"
    Tier    = "public"
  }
}

##########################################
# Private Subnets
##########################################
resource "aws_subnet" "private" {
  count = 3
  availability_zone = var.availability_zones[count.index]
  vpc_id                          = aws_vpc.main.id
  cidr_block                      = cidrsubnet(aws_vpc.main.cidr_block, 3, 2 * (count.index + 1))
  ipv6_cidr_block                 = cidrsubnet(aws_vpc.main.ipv6_cidr_block, 8, 177 + count.index * 16)
  assign_ipv6_address_on_creation = true
  map_public_ip_on_launch         = false

  tags = {
    Name    = "${var.availability_zones[count.index]}-private"
    Tier    = "private"
  }
}

##########################################
# Route Tables
##########################################
resource "aws_route_table" "public_rtb" {
  vpc_id = aws_vpc.main.id
  tags = {
    Name    = "isucon11-public"
    Tier    = "public"
  }
}
resource "aws_route" "public_v4_default" {
  route_table_id         = aws_route_table.public_rtb.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.igw.id
}
resource "aws_route" "public_v6_default" {
  route_table_id              = aws_route_table.public_rtb.id
  destination_ipv6_cidr_block = "::/0"
  gateway_id                  = aws_internet_gateway.igw.id
}

resource "aws_route_table" "private_rtb" {
  vpc_id = aws_vpc.main.id
  tags = {
    Name    = "isucon11-private"
    Tier    = "private"
  }
}
resource "aws_route" "private_v6_default" {
  route_table_id              = aws_route_table.private_rtb.id
  destination_ipv6_cidr_block = "::/0"
  egress_only_gateway_id      = aws_egress_only_internet_gateway.eigw.id
}

##########################################
# Route Table Associations
##########################################
resource "aws_route_table_association" "public" {
  count = 3
  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public_rtb.id
}

resource "aws_route_table_association" "private" {
  count = 3
  subnet_id      = aws_subnet.private[count.index].id
  route_table_id = aws_route_table.private_rtb.id
}

##########################################
# NAT Gateway
##########################################
resource "aws_eip" "nat" {
  vpc = true
}

resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.public[0].id
}

resource "aws_route" "private_nat" {
  route_table_id         = aws_route_table.private_rtb.id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = aws_nat_gateway.nat.id
}

