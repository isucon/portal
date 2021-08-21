require 'isuxportal/services/contestant/dashboard_pb'

class Api::Contestant::DashboardsController < Api::Contestant::ApplicationController
  pb :show, Isuxportal::Proto::Services::Contestant::DashboardQuery
  def show
    # See also: UpdateContestantDashboardJob
    round = Rails.application.config.x.contest.final ? "final" : "qualify"

    expires_in 15.seconds, public: true, must_revalidate: true
    response.cache_control[:extras] << 'no-cache="Set-Cookie"'

    cache_sum, cache = Rails.cache.read("dashboard:#{round}:contestant-solo:team-#{current_team.id}")
    if cache && cache_sum
      if stale?(etag: cache_sum)
        return render protobuf: cache
      end
    else
      if stale?(etag: BenchmarkResult.where(team: current_team).order(updated_at: :desc).limit(1).pluck(:updated_at))
        render protobuf: Isuxportal::Proto::Services::Contestant::DashboardResponse.new(
          leaderboard: Contest.leaderboard(admin: false, team: current_team, solo: true),
        )
      end
    end
  end
end
