# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: isuxportal/services/contestant/dashboard.proto

require 'google/protobuf'

require 'isuxportal/resources/leaderboard_pb'
require 'isuxportal/resources/contestant_instance_pb'
require 'isuxportal/resources/benchmark_job_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("isuxportal/services/contestant/dashboard.proto", :syntax => :proto3) do
    add_message "isuxportal.proto.services.contestant.DashboardQuery" do
    end
    add_message "isuxportal.proto.services.contestant.DashboardResponse" do
      optional :leaderboard, :message, 1, "isuxportal.proto.resources.Leaderboard"
      repeated :instances, :message, 2, "isuxportal.proto.resources.ContestantInstance"
      repeated :jobs, :message, 3, "isuxportal.proto.resources.BenchmarkJob"
    end
  end
end

module Isuxportal
  module Proto
    module Services
      module Contestant
        DashboardQuery = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.contestant.DashboardQuery").msgclass
        DashboardResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.contestant.DashboardResponse").msgclass
      end
    end
  end
end
