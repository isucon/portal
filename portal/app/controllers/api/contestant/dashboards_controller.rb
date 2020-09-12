require 'isuxportal/services/contestant/dashboard_pb'

class Api::Contestant::DashboardsController < Api::Contestant::ApplicationController
  pb :show, Isuxportal::Proto::Services::Contestant::DashboardQuery
  def show
    expires_in 0, public: false, must_revalidate: true
    if stale?(etag: Contest.leaderboard_etag_cached(admin: false, team: current_team))
      resp = Rails.cache.fetch("contestantdashboard-t#{current_team.id}", expires_in: 30.seconds) do
        Isuxportal::Proto::Services::Contestant::DashboardResponse.new(
          leaderboard: Contest.leaderboard(admin: false, team: current_team), # TODO: disable progresses
        ).to_pb
      end
      render protobuf: resp
    end
  end
end
