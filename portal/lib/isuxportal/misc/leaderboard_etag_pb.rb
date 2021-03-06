# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: isuxportal/misc/leaderboard_etag.proto

require 'google/protobuf'

require 'google/protobuf/timestamp_pb'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("isuxportal/misc/leaderboard_etag.proto", :syntax => :proto3) do
    add_message "isuxportal.proto.misc.LeaderboardEtag" do
      optional :admin, :bool, 1
      optional :team_id, :int64, 2
      optional :team_count, :int64, 3
      optional :team_last_updated, :message, 4, "google.protobuf.Timestamp"
      optional :latest_result_id, :int64, 5
      optional :latest_progress_id, :int64, 6
      optional :has_progress, :bool, 7
      optional :latest_result_at, :message, 8, "google.protobuf.Timestamp"
      optional :latest_progress_at, :message, 9, "google.protobuf.Timestamp"
    end
  end
end

module Isuxportal
  module Proto
    module Misc
      LeaderboardEtag = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.misc.LeaderboardEtag").msgclass
    end
  end
end
