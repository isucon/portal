require 'isuxportal/services/common/me_pb'

class Api::SessionsController < Api::ApplicationController
  def show
    render protobuf: Isuxportal::Proto::Services::Common::GetCurrentSessionResponse.new(
      contestant: current_contestant&.to_pb(detail: true),
      team: current_team&.to_pb,
      discord_server_id: current_contestant ? Rails.application.config.x.discord.server_id : "",
      contest: Contest.to_pb,
      contestant_instances: (Contest.contest_running? ? current_team&.contestant_instances&.order(number: :asc)&.map(&:to_pb) : nil) || [],
      push_vapid_key: Rails.application.config.x.webpush.vapid_key&.yield_self { |_| _.curve.public_key.to_bn.to_s(2) },
    )
  end
end
