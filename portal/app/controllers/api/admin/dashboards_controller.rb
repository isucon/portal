require 'isuxportal/resources/leaderboard_pb'
require 'isuxportal/services/admin/dashboard_pb'

class Api::Admin::DashboardsController < Api::Admin::ApplicationController
  pb :show, Isuxportal::Proto::Services::Admin::DashboardQuery
  def show
    expires_in 15.seconds, public: false

    final = Rails.application.config.x.contest.final ? "final" : "qualify"
    clar_count = Clarification.unanswered.requested.count
    cache_sum, cache = Rails.cache.read("leaderboard-v2:#{final}:admin")
    render protobuf: Isuxportal::Proto::Services::Admin::DashboardResponse.new(
      leaderboard: cache_sum && cache ? Isuxportal::Proto::Resources::Leaderboard.decode(cache) : Contest.leaderboard(admin: true, team: nil, history: false),
      unanswered_clarification_count: clar_count,
      earliest_unanswered_clarification_at: Clarification.unanswered.requested.order(created_at: :desc).limit(1).pluck(:created_at)&.first&.to_time,
    )
  end

  pb :show_solo, Isuxportal::Proto::Services::Admin::SoloDashboardQuery
  def show_solo
    expires_in 20.seconds, public: false
    round = Rails.application.config.x.contest.final ? "final" : "qualify"

    id = params[:id]
    cache_sum, cache = Rails.cache.read("dashboard-v2:#{round}:admin:team-#{id}")
    if cache && cache_sum
      if stale?(etag: cache_sum)
        return render protobuf: cache
      end
    else
      team = Team.find(id)
      if stale?(etag: Contest.leaderboard_etag(team: team))
        render protobuf: Isuxportal::Proto::Services::Admin::SoloDashboardResponse.new(
          leaderboard_item: Contest.leaderboard(admin: true, team: team, solo: true, solo_item: true, history: true),
        )
      end
    end
  end
end
