# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: isuxportal/services/admin/cloud_formation.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("isuxportal/services/admin/cloud_formation.proto", :syntax => :proto3) do
    add_message "isuxportal.proto.services.admin.GetCloudFormationQuery" do
      optional :id, :int64, 1
      optional :type, :string, 2
    end
    add_message "isuxportal.proto.services.admin.GetCloudFormationResponse" do
      optional :template, :string, 1
    end
  end
end

module Isuxportal
  module Proto
    module Services
      module Admin
        GetCloudFormationQuery = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.GetCloudFormationQuery").msgclass
        GetCloudFormationResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.GetCloudFormationResponse").msgclass
      end
    end
  end
end
