require 'isuxportal/services/audience/dashboard_pb'

class Api::Audience::DashboardsController < Api::Audience::ApplicationController
  pb :show, Isuxportal::Proto::Services::Audience::DashboardQuery
  def show
    expires_in 10.seconds, public: true, 's-maxage' => '25'
    render protobuf: Isuxportal::Proto::Services::Audience::DashboardResponse.new(
      leaderboard: Contest.leaderboard(admin: false, team: nil), # TODO: disable progresses
    )
  end
end
