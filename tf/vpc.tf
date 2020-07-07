resource "aws_vpc" "main" {
  cidr_block                       = "10.14.128.0/17"
  assign_generated_ipv6_cidr_block = true
  enable_dns_support               = true
  enable_dns_hostnames             = true

  tags = {
    Name    = "isux"
    Project = "isucon10"
  }
}

resource "aws_vpc_dhcp_options" "main" {
  domain_name         = "aws.x.isucon.dev"
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

resource "aws_subnet" "b_public" {
  availability_zone_id            = "apne1-az4"
  vpc_id                          = aws_vpc.main.id
  cidr_block                      = cidrsubnet(aws_vpc.main.cidr_block, 3, 1)
  ipv6_cidr_block                 = cidrsubnet(aws_vpc.main.ipv6_cidr_block, 8, 176) #b0
  assign_ipv6_address_on_creation = true
  map_public_ip_on_launch         = true

  tags = {
    Project = "isucon10"
    Name    = "b-public"
    Tier    = "public"
  }
}
resource "aws_subnet" "c_public" {
  availability_zone_id            = "apne1-az1"
  vpc_id                          = aws_vpc.main.id
  cidr_block                      = cidrsubnet(aws_vpc.main.cidr_block, 3, 3)
  ipv6_cidr_block                 = cidrsubnet(aws_vpc.main.ipv6_cidr_block, 8, 192) #c0
  assign_ipv6_address_on_creation = true
  map_public_ip_on_launch         = true

  tags = {
    Project = "isucon10"
    Name    = "c-public"
    Tier    = "public"
  }
}
resource "aws_subnet" "d_public" {
  availability_zone_id            = "apne1-az2"
  vpc_id                          = aws_vpc.main.id
  cidr_block                      = cidrsubnet(aws_vpc.main.cidr_block, 3, 5)
  ipv6_cidr_block                 = cidrsubnet(aws_vpc.main.ipv6_cidr_block, 8, 208) #d0
  assign_ipv6_address_on_creation = true
  map_public_ip_on_launch         = true

  tags = {
    Project = "isucon10"
    Name    = "d-public"
    Tier    = "public"
  }
}

resource "aws_subnet" "b_private" {
  availability_zone_id            = "apne1-az4"
  vpc_id                          = aws_vpc.main.id
  cidr_block                      = cidrsubnet(aws_vpc.main.cidr_block, 3, 2)
  ipv6_cidr_block                 = cidrsubnet(aws_vpc.main.ipv6_cidr_block, 8, 177) #c1
  assign_ipv6_address_on_creation = true
  map_public_ip_on_launch         = false

  tags = {
    Project = "isucon10"
    Name    = "b-private"
    Tier    = "private"
  }
}
resource "aws_subnet" "c_private" {
  availability_zone_id            = "apne1-az1"
  vpc_id                          = aws_vpc.main.id
  cidr_block                      = cidrsubnet(aws_vpc.main.cidr_block, 3, 4)
  ipv6_cidr_block                 = cidrsubnet(aws_vpc.main.ipv6_cidr_block, 8, 193) #c1
  assign_ipv6_address_on_creation = true
  map_public_ip_on_launch         = false

  tags = {
    Project = "isucon10"
    Name    = "c-private"
    Tier    = "private"
  }
}
resource "aws_subnet" "d_private" {
  availability_zone_id            = "apne1-az2"
  vpc_id                          = aws_vpc.main.id
  cidr_block                      = cidrsubnet(aws_vpc.main.cidr_block, 3, 6)
  ipv6_cidr_block                 = cidrsubnet(aws_vpc.main.ipv6_cidr_block, 8, 209) #d1
  assign_ipv6_address_on_creation = true
  map_public_ip_on_launch         = false

  tags = {
    Project = "isucon10"
    Name    = "d-private"
    Tier    = "private"
  }
}

resource "aws_route_table" "public_rtb" {
  vpc_id = aws_vpc.main.id
  tags = {
    Project = "isucon10"
    Name    = "isucon10-public"
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
    Project = "isucon10"
    Name    = "isucon10-private"
    Tier    = "private"
  }
}
resource "aws_route" "private_v6_default" {
  route_table_id              = aws_route_table.private_rtb.id
  destination_ipv6_cidr_block = "::/0"
  egress_only_gateway_id      = aws_egress_only_internet_gateway.eigw.id
}

resource "aws_route_table_association" "public" {
  for_each = {
    for k in [
      aws_subnet.b_public.id,
      aws_subnet.c_public.id,
      aws_subnet.d_public.id,
    ] : k => format("%s", k)
  }
  subnet_id      = each.value
  route_table_id = aws_route_table.public_rtb.id
}
resource "aws_route_table_association" "private" {
  for_each = {
    for k in [
      aws_subnet.b_private.id,
      aws_subnet.c_private.id,
      aws_subnet.d_private.id,
    ] : k => format("%s", k)
  }
  subnet_id      = each.value
  route_table_id = aws_route_table.private_rtb.id
}

resource "aws_eip" "nat" {
  vpc = true
  tags = {
    Project = "isucon10"
    Name    = "nat"
  }
}
resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.c_public.id

  tags = {
    Project = "isucon10"
  }
}
resource "aws_route" "private_nat" {
  route_table_id         = aws_route_table.private_rtb.id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = aws_nat_gateway.nat.id
}
