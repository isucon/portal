require 'isuxportal/services/contestant/dashboard_pb'

class Api::Contestant::DashboardsController < Api::Contestant::ApplicationController
  pb :show, Isuxportal::Proto::Services::Contestant::DashboardQuery
  def show
    render protobuf: Isuxportal::Proto::Services::Contestant::DashboardResponse.new(
      leaderboard: Contest.leaderboard(admin: false, team: current_team),
      instances: [], # TODO: ContestantInstance,
      jobs: BenchmarkJob.where(team: current_team).order(id: :desc).joins_score.limit(5).map do |job|
        job.to_pb(admin: false, team: false)
      end,
    )
  end
end
