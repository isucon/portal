require 'isuxportal/services/contestant/dashboard_pb'

class Api::Contestant::DashboardsController < Api::Contestant::ApplicationController
  pb :show, Isuxportal::Proto::Services::Contestant::DashboardQuery
  def show
    expires_in 0, public: false, must_revalidate: true
    if stale?(etag: Contest.leaderboard_etag(admin: false, team: current_team))
      render protobuf: Isuxportal::Proto::Services::Contestant::DashboardResponse.new(
        leaderboard: Contest.leaderboard(admin: false, team: current_team), # TODO: disable progresses
      )
    end
  end
end
