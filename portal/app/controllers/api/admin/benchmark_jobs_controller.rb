require 'isuxportal/services/admin/benchmark_pb'

class Api::Admin::BenchmarkJobsController < Api::Admin::ApplicationController
  JOBS_PER_PAGE = 15

  pb :index, Isuxportal::Proto::Services::Admin::ListBenchmarkJobsQuery
  def index
    @benchmark_jobs = BenchmarkJob.all.order(id: :desc).includes(:team).joins_score
    @benchmark_jobs = @benchmark_jobs.where(team_id: params[:team_id]) if params[:team_id].present?

    status = params[:status]
    if status.present?
      status_uppper_symbol = Isuxportal::Proto::Resources::BenchmarkJob::Status.lookup(status.to_i)
      raise Api::ApplicationController::Error::BadRequest.new("Invalid status") if status_uppper_symbol.nil?

      @benchmark_jobs = @benchmark_jobs.where(status: status_uppper_symbol.to_s.downcase.to_sym)
    end

    if params[:failed_only] == '1'
      @benchmark_jobs = @benchmark_jobs.joins(:benchmark_result).where(benchmark_results: { passed: false })
    end

    max_page = (@benchmark_jobs.count(:id) / JOBS_PER_PAGE.to_f).ceil

    if params[:page] && params[:page].to_i >= 0
      offset = params[:page].to_i * JOBS_PER_PAGE
      @benchmark_jobs = @benchmark_jobs.limit(JOBS_PER_PAGE).offset(offset)
    end

    render protobuf: Isuxportal::Proto::Services::Admin::ListBenchmarkJobsResponse.new(
      jobs: @benchmark_jobs.map do |job|
        job.to_pb(admin: true, team: true)
      end,
      max_page: max_page,
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
      target: ContestantInstance.find(pb.target_id),
    )
    render protobuf: Isuxportal::Proto::Services::Admin::EnqueueBenchmarkJobResponse.new(
      job: @benchmark_job.to_pb(admin: true, team: true, detail: true)
    )
  end

  pb :destroy, Isuxportal::Proto::Services::Admin::CancelBenchmarkJobQuery
  def destroy
    @benchmark_job = BenchmarkJob.find(params[:id])
    @benchmark_job.cancel!
    BenchmarkCompletionJob.perform_later(@benchmark_job)
    render protobuf: Isuxportal::Proto::Services::Admin::CancelBenchmarkJobResponse.new(
      job: @benchmark_job.to_pb(admin: true, team: true, detail: true)
    )
  rescue BenchmarkJob::InvalidTransition
    raise Api::ApplicationController::Error::NotFound, "cannot cancel a completed job"
  end
end
