require 'isuxportal/services/contestant/benchmark_pb'

class Api::Contestant::BenchmarkJobsController < Api::Contestant::ApplicationController
  pb :index, Isuxportal::Proto::Services::Contestant::ListBenchmarkJobsQuery
  def index
    @benchmark_jobs = BenchmarkJob.where(team: current_team).order(id: :desc).joins_score
    @benchmark_jobs = @benchmark_jobs.limit(params[:limit].to_i) if params[:limit].present? && params[:limit].to_i != 0

    render protobuf: Isuxportal::Proto::Services::Contestant::ListBenchmarkJobsResponse.new(
      jobs: @benchmark_jobs.map do |job|
        job.to_pb(admin: false, team: false)
      end,
    )
  end

  pb :show, Isuxportal::Proto::Services::Contestant::GetBenchmarkJobQuery
  def show
    @benchmark_job = BenchmarkJob.where(team: current_team).find(params[:id])

    render protobuf: Isuxportal::Proto::Services::Contestant::GetBenchmarkJobResponse.new(
      job: @benchmark_job.to_pb(admin: false, detail: true)
    )
  end

  pb :create, Isuxportal::Proto::Services::Contestant::EnqueueBenchmarkJobRequest
  def create
    @benchmark_job = BenchmarkJob.create!(
      team: current_team,
      # target_id: 0, # TODO: ContestantInstance
    )
    render protobuf: Isuxportal::Proto::Services::Contestant::EnqueueBenchmarkJobResponse.new(
      job: @benchmark_job.to_pb(admin: false, detail: true)
    )
  end
end
