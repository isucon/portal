require 'isuxportal/resources/leaderboard_pb'
require 'isuxportal/services/admin/dashboard_pb'

class Api::Admin::DashboardsController < Api::Admin::ApplicationController
  pb :show, Isuxportal::Proto::Services::Admin::DashboardQuery
  def show
    final = Rails.application.config.x.final ? "final" : "qualify"
    clar_count = Clarification.unanswered.requested.count
    cached_lb = Rails.cache.read("leaderboard:#{final}:admin")&.yield_self { |_| Isuxportal::Proto::Resources::Leaderboard.decode(_) }
    render protobuf: Isuxportal::Proto::Services::Admin::DashboardResponse.new(
      leaderboard: cached_lb || Contest.leaderboard(admin: true, team: nil),
      unanswered_clarification_count: clar_count,
      earliest_unanswered_clarification_at: Clarification.unanswered.requested.order(created_at: :desc).limit(1).pluck(:created_at)&.first&.to_time,
    )
  end
end
