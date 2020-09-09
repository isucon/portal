require 'isuxportal/services/admin/dashboard_pb'

class Api::Admin::DashboardsController < Api::Admin::ApplicationController
  pb :show, Isuxportal::Proto::Services::Admin::DashboardQuery
  def show
    expires_in 0, public: false, must_revalidate: true
    if stale?(etag: Contest.leaderboard_etag(admin: true , team: nil))
      render protobuf: Isuxportal::Proto::Services::Admin::DashboardResponse.new(
        leaderboard: Contest.leaderboard(admin: true, team: nil),
      )
    end
  end
end
