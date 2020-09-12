require 'isuxportal/services/contestant/dashboard_pb'

class Api::Contestant::DashboardsController < Api::Contestant::ApplicationController
  pb :show, Isuxportal::Proto::Services::Contestant::DashboardQuery
  def show
    expires_in 0, public: false, must_revalidate: true
    if stale?(etag: Contest.leaderboard_etag_cached(admin: false, team: current_team))
      resp = Rails.cache.fetch("contestantdashboard3-t#{current_team.id}", expires_in: 12.hours) do
        Isuxportal::Proto::Services::Contestant::DashboardResponse.encode(Isuxportal::Proto::Services::Contestant::DashboardResponse.new(
          leaderboard: Contest.leaderboard(admin: false, team: current_team), # TODO: disable progresses
        ))
      end
      render protobuf: resp
    end
  end
end
