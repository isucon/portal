{
  vpcId:: 'vpc-04f36e0596c6daf7f',
  privateSubnets:: ['subnet-0f3edf5aebee274dc', 'subnet-0f5f28fdb05370179', 'subnet-01f7e595924958da7'],
  publicSubnets:: ['subnet-0979899c1663bf8b0', 'subnet-0cbb1e44b6d0cb8ee', 'subnet-034d22a6c3b71c333'],
  elbSecurityGroups:: ['sg-00fa0b6878bfd8e76'],
  acmCertificateWildDev:: 'arn:aws:acm:ap-northeast-1:245943874622:certificate/38464bc5-a0d4-4789-87e1-2b9ba9f305da',
  ecrRepository(name):: std.format('245943874622.dkr.ecr.ap-northeast-1.amazonaws.com/%s', name),
  iamRole(name):: std.format('arn:aws:iam::245943874622:role/%s', name),

  ecsSchedulerBase:: {
    type: 'ecs',
    region: 'ap-northeast-1',
    cluster: error 'cluster must be specified',
    // role: 'aws-service-role/ecs.amazonaws.com/AWSServiceRoleForECS',
    execution_role_arn: $.iamRole('EcsTaskExecution'),
    desired_count: 1,
    tags: {
      Project: 'portal',
    },
  },
  ecsSchedulerFargate:: $.ecsSchedulerBase {
    cluster: 'isuxportal-fargate',
    cpu: '256',
    memory: '512',
    requires_compatibilities: ['FARGATE'],
    capacity_provider_strategy: [
      { capacity_provider: 'FARGATE', weight: 1 },
    ],
    network_mode: 'awsvpc',
    // launch_type: 'FARGATE',
    network_configuration: {
      awsvpc_configuration: {
        subnets: $.privateSubnets,
        security_groups: [
          'sg-007b13cdfcc6893fe',  // default
          'sg-0159a3ef3703caada',  // http
        ],
        assign_public_ip: 'DISABLED',
      },
    },
  },

  albInternetFacing:: {
    vpc_id: $.vpcId,
    scheme: 'internet-facing',
    health_check_path: '/site/sha',
    listeners: [
      {
        port: 80,
        protocol: 'HTTP',
      },
      {
        port: 443,
        protocol: 'HTTPS',
        certificate_arn: $.acmCertificateWildDev,
        ssl_policy: 'ELBSecurityPolicy-FS-1-2-Res-2019-08',
      },
    ],
    subnets: $.publicSubnets,
    security_groups: $.elbSecurityGroups,
    tags: {
      Project: 'portal',
    },
    load_balancer_attributes: {
      'access_logs.s3.enabled': 'true',
      'access_logs.s3.bucket': 'isucon11-logs',
      'access_logs.s3.prefix': std.format('hako-%s', std.extVar('appId')),
      'idle_timeout.timeout_seconds': '60',
    },
    target_group_attributes: {
      'deregistration_delay.timeout_seconds': '20',
    },
  },
  grpcAlbInternetFacing:: {
    vpc_id: $.vpcId,
    scheme: 'internet-facing',
    protocol_version: 'GRPC',
    health_check_path: '/AWS.ELB/healthcheck',
    listeners: [
      {
        port: 443,
        protocol: 'HTTPS',
        certificate_arn: $.acmCertificateWildDev,
        ssl_policy: 'ELBSecurityPolicy-FS-1-2-Res-2019-08',
      },
    ],
    container_name: 'front',
    container_port: 8000,
    subnets: $.publicSubnets,
    security_groups: $.elbSecurityGroups,
    tags: {
      Project: 'portal',
    },
    load_balancer_attributes: {
      'access_logs.s3.enabled': 'true',
      'access_logs.s3.bucket': 'isucon11-logs',
      'access_logs.s3.prefix': std.format('hako-%s', std.extVar('appId')),
    },
    target_group_attributes: {
      'deregistration_delay.timeout_seconds': '20',
    },
  },
  grpcAlbInternal:: {
    vpc_id: $.vpcId,
    scheme: 'internal',
    protocol_version: 'GRPC',
    health_check_path: '/AWS.ELB/healthcheck',
    listeners: [
      {
        port: 443,
        protocol: 'HTTPS',
        certificate_arn: $.acmCertificateWildDev,
        ssl_policy: 'ELBSecurityPolicy-FS-1-2-Res-2019-08',
      },
    ],
    container_name: 'front',
    container_port: 8000,
    subnets: $.privateSubnets,
    security_groups: $.elbSecurityGroups,
    tags: {
      Project: 'portal',
    },
    load_balancer_attributes: {
      'access_logs.s3.enabled': 'true',
      'access_logs.s3.bucket': 'isucon11-logs',
      'access_logs.s3.prefix': std.format('hako-%s', std.extVar('appId')),
    },
    target_group_attributes: {
      'deregistration_delay.timeout_seconds': '20',
    },
  },

  //serviceDiscovery(container_name, name, port=80):: {
  //  container_name: container_name,
  //  container_port: port,
  //  service: {
  //    name: name,
  //    namespace_id: 'ns-xxx',
  //    dns_config: {
  //      dns_records: [{ type: 'SRV', ttl: 20 }],
  //    },
  //  },
  //},

  codebuildTag(projectName):: {
    type: 'codebuild_tag',
    region: 'ap-northeast-1',
    project: projectName,
  },

  githubTag(repo):: {
    type: 'github_status_tag',
    repo: repo,
    checks: ['build'],
  },
  makeSecretParameterStore(path)::
    function(variableName) {
      name: variableName,
      value_from: std.format('arn:aws:ssm:ap-northeast-1:245943874622:parameter/hako/%s/%s', [path, variableName]),
    },

  awsLogs(name):: {
    log_driver: 'awslogs',
    options: {
      'awslogs-group': std.format('/ecs/%s_%s', [std.extVar('appId'), name]),
      'awslogs-region': 'ap-northeast-1',
      'awslogs-stream-prefix': 'ecs',
    },
  },
  createLogGroups():: {
    type: 'create_aws_cloud_watch_logs_log_group',
  },
}
