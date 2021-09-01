# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: isuxportal/services/admin/benchmark.proto

require 'google/protobuf'

require 'isuxportal/resources/benchmark_job_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("isuxportal/services/admin/benchmark.proto", :syntax => :proto3) do
    add_message "isuxportal.proto.services.admin.ListBenchmarkJobsQuery" do
      optional :team_id, :int64, 1
      optional :status, :enum, 2, "isuxportal.proto.resources.BenchmarkJob.Status"
      optional :page, :int64, 3
    end
    add_message "isuxportal.proto.services.admin.ListBenchmarkJobsResponse" do
      repeated :jobs, :message, 1, "isuxportal.proto.resources.BenchmarkJob"
      optional :max_page, :int64, 2
    end
    add_message "isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest" do
      optional :team_id, :int64, 1
      optional :target_id, :int64, 2
    end
    add_message "isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse" do
      optional :job, :message, 1, "isuxportal.proto.resources.BenchmarkJob"
    end
    add_message "isuxportal.proto.services.admin.CancelBenchmarkJobQuery" do
      optional :id, :int64, 1
    end
    add_message "isuxportal.proto.services.admin.CancelBenchmarkJobResponse" do
      optional :job, :message, 1, "isuxportal.proto.resources.BenchmarkJob"
    end
    add_message "isuxportal.proto.services.admin.GetBenchmarkJobQuery" do
      optional :id, :int64, 1
    end
    add_message "isuxportal.proto.services.admin.GetBenchmarkJobResponse" do
      optional :job, :message, 1, "isuxportal.proto.resources.BenchmarkJob"
    end
  end
end

module Isuxportal
  module Proto
    module Services
      module Admin
        ListBenchmarkJobsQuery = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.ListBenchmarkJobsQuery").msgclass
        ListBenchmarkJobsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.ListBenchmarkJobsResponse").msgclass
        EnqueueBenchmarkJobRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest").msgclass
        EnqueueBenchmarkJobResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse").msgclass
        CancelBenchmarkJobQuery = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.CancelBenchmarkJobQuery").msgclass
        CancelBenchmarkJobResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.CancelBenchmarkJobResponse").msgclass
        GetBenchmarkJobQuery = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.GetBenchmarkJobQuery").msgclass
        GetBenchmarkJobResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.GetBenchmarkJobResponse").msgclass
      end
    end
  end
end
