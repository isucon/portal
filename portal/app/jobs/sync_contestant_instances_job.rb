require "aws-sdk-ec2"

class SyncContestantInstancesJob < ApplicationJob

  def perform(project)
    Rails.logger.info "Syncing contestant instances"

    ec2 = Aws::EC2::Resource.new(region: "ap-northeast-1")
    instances = ec2.instances(filters: [ { name: "tag:Project", values: [project] }, { name: "tag:Role", values: ["contestant"] } ])
    instances.each do |i|
      team_id = i.tags.find {|tag| tag.key == "IsuconTeamID" }&.value&.to_i
      number = i.tags.find {|tag| tag.key == "IsuconInstanceNum" }&.value&.to_i
      next if team_id.nil? || team_id <= 0 || number.nil? || number <= 0

      ci = ContestantInstance.find_or_initialize_by(
        team_id: team_id,
        number: number,
      )
      ci.update_attributes!(
        cloud_id: i.id,
        status: Isuxportal::Proto::Resources::ContestantInstance::Status::RUNNING,
        private_ipv4_address: i.private_ip_address,
        public_ipv4_address: i.public_ip_address,
      )
    end
  end
end
