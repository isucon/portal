require 'isuxportal/services/audience/dashboard_pb'

class Api::Audience::DashboardsController < Api::Audience::ApplicationController
  pb :show, Isuxportal::Proto::Services::Audience::DashboardQuery
  def show
    expires_in 20.seconds, public: true, 's-maxage' => '30'
    round = Rails.application.config.x.contest.final ? "final" : "qualify"

    cache_sum, cache = Rails.cache.read("dashboard-v2:#{round}:audience")
    if cache && cache_sum
      if stale?(etag: cache_sum)
        return render protobuf: cache
      end
    else
      if stale?(etag: Contest.leaderboard_etag())
        render protobuf: Isuxportal::Proto::Services::Audience::DashboardResponse.new(
          leaderboard: Contest.leaderboard(history: false),
        )
      end
    end
  end

  pb :show_solo, Isuxportal::Proto::Services::Audience::SoloDashboardQuery
  def show_solo
    expires_in 20.seconds, public: true, 's-maxage' => '30'
    round = Rails.application.config.x.contest.final ? "final" : "qualify"

    id = params[:id]
    cache_sum, cache = Rails.cache.read("dashboard-v2:#{round}:audience:team-#{id}")
    if cache && cache_sum
      if stale?(etag: cache_sum)
        return render protobuf: cache
      end
    else
      team = Team.find(id)
      if stale?(etag: Contest.leaderboard_etag(team: team))
        render protobuf: Isuxportal::Proto::Services::Audience::SoloDashboardResponse.new(
          leaderboard_item: Contest.leaderboard(audience: true, team: team, solo: true, solo_item: true, history: true),
        )
      end
    end
  end
end
