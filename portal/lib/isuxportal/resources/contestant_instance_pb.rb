# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: isuxportal/resources/contestant_instance.proto

require 'google/protobuf'

require 'isuxportal/resources/team_pb'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("isuxportal/resources/contestant_instance.proto", :syntax => :proto3) do
    add_message "isuxportal.proto.resources.ContestantInstance" do
      optional :id, :int64, 7
      optional :cloud_id, :string, 1
      optional :team_id, :int64, 2
      optional :number, :int64, 3
      optional :public_ipv4_address, :string, 4
      optional :private_ipv4_address, :string, 5
      optional :status, :enum, 6, "isuxportal.proto.resources.ContestantInstance.Status"
      optional :team, :message, 16, "isuxportal.proto.resources.Team"
    end
    add_enum "isuxportal.proto.resources.ContestantInstance.Status" do
      value :UNKNOWN, 0
      value :PENDING, 1
      value :MODIFYING, 2
      value :STOPPED, 3
      value :RUNNING, 4
      value :TERMINATED, 5
    end
  end
end

module Isuxportal
  module Proto
    module Resources
      ContestantInstance = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.resources.ContestantInstance").msgclass
      ContestantInstance::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.resources.ContestantInstance.Status").enummodule
    end
  end
end
