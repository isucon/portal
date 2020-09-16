require 'isuxportal/services/bench/receiving_pb'
require 'isuxportal/services/bench/receiving_services_pb'

class BenchmarkQueueService < Isuxportal::Proto::Services::Bench::BenchmarkQueue::Service
  def receive_benchmark_job(request, _call)
    unless Rack::Utils.secure_compare(request.token, Rails.application.config.x.bench_auth.token)
      raise GRPC::Unauthenticated.new("Unauthenticated")
    end

    loop do
      # TODO: dedicated benchmarkers and shared benchmarkers
      scope = BenchmarkJob.where(status: :pending).order(id: :desc)
      scope = scope.where(team_id: request.team_id) if request.team_id > 0

      ApplicationRecord.transaction do
        job = scope.first
        if job
          job.lock!
          next unless job.pending?
          job.start!(request.instance_name)
          return Isuxportal::Proto::Services::Bench::ReceiveBenchmarkJobResponse.new(
            job_handle: Isuxportal::Proto::Services::Bench::ReceiveBenchmarkJobResponse::JobHandle.new(
              job_id: job.id,
              handle: job.handle,
              target_ipv4_address: job.target.public_ipv4_address, # TODO:
              description_human: "", # TODO: 
            ),
          )
        else
          return Isuxportal::Proto::Services::Bench::ReceiveBenchmarkJobResponse.new(
            job_handle: nil,
          )
        end
      end
    end
  end

  def cancel_owned_benchmark_job(request, _call)
    unless Rack::Utils.secure_compare(request.token, Rails.application.config.x.bench_auth.token)
      raise GRPC::Unauthenticated.new("Unauthenticated")
    end

    ApplicationRecord.transaction do
      BenchmarkJob.where(status: :running, instance_name: request.instance_name).each do |job|
        job.error!
      end
    end

    Isuxportal::Proto::Services::Bench::CancelOwnedBenchmarkJobResponse.new()
  end
end
