require 'isuxportal/services/contestant/dashboard_pb'

class Api::Contestant::DashboardsController < Api::Contestant::ApplicationController
  pb :show, Isuxportal::Proto::Services::Contestant::DashboardQuery
  def show
    render protobuf: Isuxportal::Proto::Services::Contestant::DashboardResponse.new(
      leaderboard: Contest.leaderboard(admin: false, team: current_team),
      instances: [], # TODO: ContestantInstance,
    )
  end
end
