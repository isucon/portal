require 'isuxportal/services/bench/reporting_pb'
require 'isuxportal/services/bench/reporting_services_pb'

class BenchmarkReportService < Isuxportal::Proto::Services::Bench::BenchmarkReport::Service
  def report_benchmark_result(stream)
    stream.each do |request|
      job = BenchmarkJob.find_by!(id: request.job_id, handle: request.handle)
      if !request.result
        raise GRPC::InvalidArgument.new("result must contain result")
      end
      if request.result.execution
        raise GRPC::InvalidArgument.new("result must not contain execution")
      end

      job.submit_result_from_pb!(request.result)
      stream.send_msg Isuxportal::Proto::Services::Bench::ReportBenchmarkResultResponse.new(
        acked_nonce: request.nonce,
      )
    end
  rescue BenchmarkJob::InvalidTransition => e
    raise GRPC::FailedPrecondition.new(e.class.name)
  rescue ActiveRecord::RecordNotFound => e
    raise GRPC::NotFound.new(e.message)
  rescue ActiveRecord::RecordInvalid => e
    raise GRPC::InvalidArgument.new(e.message)
  end

  def complete_benchmark_job(request, _call)
    if !request.result&.finished || !request.result&.execution
      raise GRPC::InvalidArgument.new("result must be complete")
    end

    ApplicationRecord.transaction do
      job = BenchmarkJob.find_by!(id: request.job_id, handle: request.handle)
      job.submit_result_from_pb!(request.result)
      unless job.closed?
        raise GRPC::InvalidArgument.new("result must be complete")
      end
    end

    Isuxportal::Proto::Services::Bench::CompleteBenchmarkJobResponse.new(
    )
  rescue BenchmarkJob::InvalidTransition => e
    raise GRPC::FailedPrecondition.new(e.class.name)
  rescue ActiveRecord::RecordNotFound => e
    raise GRPC::NotFound.new(e.message)
  rescue ActiveRecord::RecordInvalid => e
    raise GRPC::InvalidArgument.new(e.message)
  end

end
