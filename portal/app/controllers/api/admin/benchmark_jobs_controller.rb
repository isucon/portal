require 'isuxportal/services/admin/benchmark_pb'

class Api::Admin::BenchmarkJobsController < Api::Admin::ApplicationController
  pb :index, Isuxportal::Proto::Services::Admin::ListBenchmarkJobsQuery
  def index
    @benchmark_jobs = BenchmarkJob.all.order(id: :desc).includes(:team).joins_score
    @benchmark_jobs = @benchmark_jobs.where(team_id: params[:team_id]) if params[:team_id].present?
    @benchmark_jobs = @benchmark_jobs.where.not(status: %i(errored cancelled finished)) if params[:incomplete_only] == '1'

    render protobuf: Isuxportal::Proto::Services::Admin::ListBenchmarkJobsResponse.new(
      jobs: @benchmark_jobs.map do |job|
        job.to_pb(admin: true, team: true)
      end,
    )
  end

  pb :show, Isuxportal::Proto::Services::Admin::GetBenchmarkJobQuery
  def show
    @benchmark_job = BenchmarkJob.find(params[:id])

    render protobuf: Isuxportal::Proto::Services::Admin::GetBenchmarkJobResponse.new(
      job: @benchmark_job.to_pb(admin: true, team: true, detail: true)
    )
  end

  pb :create, Isuxportal::Proto::Services::Admin::EnqueueBenchmarkJobRequest
  def create
    @team = Team.find(pb.team_id)
    @benchmark_job = BenchmarkJob.create!(
      team_id: @team.id,
      # target_id: 0, # TODO: ContestantInstance
    )
    render protobuf: Isuxportal::Proto::Services::Admin::EnqueueBenchmarkJobResponse.new(
      job: @benchmark_job.to_pb(admin: true, team: true)
    )
  end

  pb :delete, Isuxportal::Proto::Services::Admin::CancelBenchmarkJobQuery
  def delete
    @benchmark_job = BenchmarkJob.find(params[:id])
    @benchmark_job.cancel!
    render protobuf: Isuxportal::Proto::Services::Admin::CancelBenchmarkJobResponse.new(
      job: @benchmark_job.to_pb(admin: true, team: true)
    )
  rescue BenchmarkJob::InvalidTransition
    raise Api::ApplicationController::Error::NotFound, "cannot cancel a completed job"
  end
end
