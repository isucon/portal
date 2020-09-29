require 'isuxportal/services/audience/dashboard_pb'

class Api::Audience::DashboardsController < Api::Audience::ApplicationController
  pb :show, Isuxportal::Proto::Services::Audience::DashboardQuery
  def show
    expires_in 5.seconds, public: true, 's-maxage' => '10'
    render protobuf: Rails.cache.read('audiencedashboard4-unfrozen') || Isuxportal::Proto::Services::Audience::DashboardResponse.new(
      leaderboard: Contest.leaderboard(admin: false, team: nil), # TODO: disable progresses
    )
  end
end
