require 'isuxportal/services/admin/dashboard_pb'

class Api::Admin::DashboardsController < Api::Admin::ApplicationController
  pb :show, Isuxportal::Proto::Services::Admin::DashboardQuery
  def show
    render protobuf: Isuxportal::Proto::Services::Admin::DashboardResponse.new(
      leaderboard: Contest.leaderboard(admin: true, team: nil),
    )
  end
end
