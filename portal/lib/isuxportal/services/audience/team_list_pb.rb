# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: isuxportal/services/audience/team_list.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("isuxportal/services/audience/team_list.proto", :syntax => :proto3) do
    add_message "isuxportal.proto.services.audience.ListTeamRequest" do
    end
    add_message "isuxportal.proto.services.audience.ListTeamResponse" do
      repeated :teams, :message, 1, "isuxportal.proto.services.audience.ListTeamResponse.TeamListItem"
    end
    add_message "isuxportal.proto.services.audience.ListTeamResponse.TeamListItem" do
      optional :team_id, :int64, 1
      optional :name, :string, 2
      repeated :member_names, :string, 3
      optional :final_participation, :bool, 4
    end
  end
end

module Isuxportal
  module Proto
    module Services
      module Audience
        ListTeamRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.audience.ListTeamRequest").msgclass
        ListTeamResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.audience.ListTeamResponse").msgclass
        ListTeamResponse::TeamListItem = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.audience.ListTeamResponse.TeamListItem").msgclass
      end
    end
  end
end
