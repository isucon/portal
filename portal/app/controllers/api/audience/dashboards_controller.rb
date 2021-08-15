require 'isuxportal/services/audience/dashboard_pb'

class Api::Audience::DashboardsController < Api::Audience::ApplicationController
  pb :show, Isuxportal::Proto::Services::Audience::DashboardQuery
  def show
    expires_in 5.seconds, public: true, 's-maxage' => '10'
    final = Rails.application.config.x.final ? "final" : "qualify"
    render protobuf: Rails.cache.read("dashboard:#{final}:audience:public") || Isuxportal::Proto::Services::Audience::DashboardResponse.new(
      leaderboard: Contest.leaderboard(admin: false, team: nil), # TODO: disable progresses
    )
  end
end
