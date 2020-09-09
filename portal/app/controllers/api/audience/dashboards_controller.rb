require 'isuxportal/services/audience/dashboard_pb'

class Api::Audience::DashboardsController < Api::Audience::ApplicationController
  pb :show, Isuxportal::Proto::Services::Audience::DashboardQuery
  def show
    expires_in 15.seconds, public: true, 's-maxage' => '25'
    if stale?(etag: Contest.leaderboard_etag(admin: false, team: nil))
      render protobuf: Isuxportal::Proto::Services::Audience::DashboardResponse.new(
        leaderboard: Contest.leaderboard(admin: false, team: nil), # TODO: disable progresses
      )
    end
  end
end
