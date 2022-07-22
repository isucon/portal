require 'isuxportal/services/contestant/dashboard_pb'

class Api::Contestant::DashboardsController < Api::Contestant::ApplicationController
  pb :show, Isuxportal::Proto::Services::Contestant::DashboardQuery
  def show
    # See also: UpdateContestantDashboardJob
    round = Rails.application.config.x.contest.final ? "final" : "qualify"

    expires_in 20.seconds, public: false

    cache_sum, cache = Rails.cache.read("dashboard-v2:#{round}:contestant:team-#{current_team.id}")
    if cache && cache_sum
      if stale?(etag: cache_sum)
        return render protobuf: cache
      end
    else
      if stale?(etag: BenchmarkResult.where(team: current_team).order(updated_at: :desc).limit(1).pluck(:updated_at))
        render protobuf: Isuxportal::Proto::Services::Contestant::DashboardResponse.new(
          leaderboard_item: Contest.leaderboard(admin: false, team: current_team, solo: true, solo_item: true, history: true),
        )
      end
    end
  end
end
