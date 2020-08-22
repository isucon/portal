require 'isuxportal/services/common/me_pb'

class Api::SessionsController < Api::ApplicationController
  def show
    render protobuf: Isuxportal::Proto::Services::Common::GetCurrentSessionResponse.new(
      contestant: current_contestant&.to_pb(detail: true),
      team: current_team&.to_pb,
      discord_server_id: current_contestant ? Rails.application.config.x.discord.server_id : "",
      contest: Contest.to_pb,
    )
  end
end
