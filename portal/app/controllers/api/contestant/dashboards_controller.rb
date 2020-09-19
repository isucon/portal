require 'isuxportal/services/contestant/dashboard_pb'

class Api::Contestant::DashboardsController < Api::Contestant::ApplicationController
  pb :show, Isuxportal::Proto::Services::Contestant::DashboardQuery
  def show
    # See also: UpdateContestantDashboardJob
    ptr = Rails.cache.read("contestantdashboard4-t#{current_team.id}-pointer")
    if ptr
      ptr_resp = Rails.cache.read(ptr)
      if ptr_resp
        return render protobuf: ptr_resp
      end
    end

    render protobuf: Isuxportal::Proto::Services::Contestant::DashboardResponse.new(
      leaderboard: Contest.leaderboard(admin: false, team: current_team),
    )
  end
end
