class Api::Bench::BenchmarkResultsController < Api::Bench::ApplicationController
  pb :create, Isuxportal::Proto::Services::Bench::ReportBenchmarkResultRequest
  def create
    job = BenchmarkJob.find_by!(id: pb.job_id, handle: pb.handle)
    unless pb.result
      raise Api::ApplicationController::Error::BadRequest, "result must contain result"
    end
    if pb.result.execution
      raise Api::ApplicationController::Error::BadRequest, "result must not contain execution"
    end
    
    marked_at = pb.result.marked_at&.yield_self { |_| Time.zone.at(_.seconds, _.nanos / 1000) }
    unless marked_at
      raise GRPC::InvalidArgument.new("result.marked_at is mandatory")
    end
    
    if !job.benchmark_result || marked_at > job.benchmark_result.marked_at
      job.submit_result_from_pb!(pb.result)
      if job.closed?
        BenchmarkCompletionJob.perform_later(job)
      end
    end
    
    render protobuf: Isuxportal::Proto::Services::Bench::ReportBenchmarkResultResponse.new(
    )
  rescue BenchmarkJob::InvalidTransition => e
    raise Api::ApplicationController::Error::BadRequest, "#{e.class.name}: #{e.message}"
  end
  
  pb :complete, Isuxportal::Proto::Services::Bench::CompleteBenchmarkJobRequest
  def complete
    if !pb.result&.finished || !pb.result&.execution
      raise Api::ApplicationController::Error::BadRequest, "result must be complete"
    end

    j = ApplicationRecord.transaction do
      job = BenchmarkJob.find_by!(id: pb.job_id, handle: pb.handle)
      job.submit_result_from_pb!(pb.result)
      unless job.closed?
        raise Api::ApplicationController::Error::BadRequest, "result must be complete"
      end
      job
    end
    BenchmarkCompletionJob.perform_later(j) if j.closed?
    
    render protobuf: Isuxportal::Proto::Services::Bench::CompleteBenchmarkJobResponse.new(
    )
    
  end
end
