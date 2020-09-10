require 'isuxportal/services/admin/dashboard_pb'

class Api::Admin::DashboardsController < Api::Admin::ApplicationController
  pb :show, Isuxportal::Proto::Services::Admin::DashboardQuery
  def show
    expires_in 0, public: false, must_revalidate: true
    clar_count = Clarification.unanswered.requested.count
    if stale?(etag: [Contest.leaderboard_etag(admin: true , team: nil), clar_count, Clarification.count])
      render protobuf: Isuxportal::Proto::Services::Admin::DashboardResponse.new(
        leaderboard: Contest.leaderboard(admin: true, team: nil),
        unanswered_clarification_count: clar_count,
        earliest_unanswered_clarification_at: Clarification.unanswered.requested.order(created_at: :desc).limit(1).pluck(:created_at)&.first&.to_time,
      )
    end
  end
end
