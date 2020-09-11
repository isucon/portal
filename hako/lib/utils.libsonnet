{
  vpcId:: 'vpc-0ee05560be5a92944',
  privateSubnets:: ['subnet-023e325c18b14b5f0', 'subnet-08e9420e6aa0d1cae', 'subnet-0a40d79a12bd44519'],
  publicSubnets:: ['subnet-0144e738b28e05b70', 'subnet-08e15bfef16f74b28', 'subnet-020d222c7dec3f4da'],
  elbSecurityGroups:: ['sg-090e4638400031f3c'],
  acmCertificateWildDev:: 'arn:aws:acm:ap-northeast-1:516315029474:certificate/3945bc20-711f-4980-aeea-509d75dc4e77',
  ecrRepository(name):: std.format('516315029474.dkr.ecr.ap-northeast-1.amazonaws.com/%s', name),
  iamRole(name):: std.format('arn:aws:iam::516315029474:role/%s', name),

  ecsSchedulerBase:: {
    type: 'ecs',
    region: "ap-northeast-1",
    cluster: error "cluster must be specified",
    // role: 'aws-service-role/ecs.amazonaws.com/AWSServiceRoleForECS',
    execution_role_arn: $.iamRole('EcsTaskExecution'),
    desired_count: 1,
    tags: {
      Project: 'isucon10',
    },
  },
  ecsSchedulerFargate:: $.ecsSchedulerBase {
    cluster: 'isux-fargate',
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
          'sg-01e55b291deea585e', // default
          'sg-073e8286681e972b0', // http
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
        Project: 'isucon10',
      },
      load_balancer_attributes: {
        'access_logs.s3.enabled': 'true',
        'access_logs.s3.bucket': 'isucon10-logs',
        'access_logs.s3.prefix': std.format('hako-%s', std.extVar('appId')),
        'idle_timeout.timeout_seconds': '60',
      },
      target_group_attributes: {
        'deregistration_delay.timeout_seconds': '20',
      },
    },
  grpcNlbInternetFacing:: {
      vpc_id: $.vpcId,
      type: 'network',
      scheme: 'internet-facing',
      listeners: [
        {
          port: 443,
          protocol: 'TLS',
          certificate_arn: $.acmCertificateWildDev,
          ssl_policy: 'ELBSecurityPolicy-FS-1-2-Res-2019-08',
        },
      ],
      container_name: 'front',
      container_port: 8000,
      subnets: $.publicSubnets,
      security_groups: $.elbSecurityGroups,
      tags: {
        Project: 'isucon10',
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
      value_from: std.format('arn:aws:ssm:ap-northeast-1:516315029474:parameter/hako/%s/%s', [path, variableName]),
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
