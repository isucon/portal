require 'isuxportal/services/bench/reporting_pb'
require 'isuxportal/services/bench/reporting_services_pb'

class BenchmarkReportService < Isuxportal::Proto::Services::Bench::BenchmarkReport::Service
  def report_benchmark_result(stream)
    stream.each do |request|
      job = BenchmarkJob.find_by!(id: request.job_id, handle: request.handle)
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
end
