#!/usr/bin/env ruby
require_relative '../config/environment'
$stdout.sync = true

require 'socket'
require 'grpc_kit'

require 'isuxportal/services/bench/receiving_pb'
require 'isuxportal/services/bench/reporting_pb'
require 'isuxportal/services/bench/receiving_services_pb'
require 'isuxportal/services/bench/reporting_services_pb'

HOST = ENV.fetch('GRPC_HOST', 'localhost')
PORT = ENV.fetch('GRPC_PORT', 4000).to_i
NUM_THREADS = ENV.fetch('NUM_THREADS', 1).to_i

class ServiceClientBase
  def socket
    @socket ||= TCPSocket.new(HOST, PORT)
  end

  def close
    @socket.close if @socket
  end
end

class ReportServiceClient < ServiceClientBase
  def stub
    @stub ||= Isuxportal::Proto::Services::Bench::BenchmarkReport::Stub.new(socket)
  end

  def report_benchmark_result
    @call = stub.report_benchmark_result({})
  end

  def call
    @call
  end

  def make_request(opts)
    Isuxportal::Proto::Services::Bench::ReportBenchmarkResultRequest.new(opts)
  end
end

class QueueServiceClient < ServiceClientBase
  def stub
    @stub ||= Isuxportal::Proto::Services::Bench::BenchmarkQueue::Stub.new(socket)
  end

  def receive_benchmark_job(request_opts)
    request = make_request(request_opts)
    stub.receive_benchmark_job(request)
  end

  def make_request(opts)
    Isuxportal::Proto::Services::Bench::ReceiveBenchmarkJobRequest.new(opts)
  end
end

class BenchmarkClient
  SLEEP_INTERVAL = 1

  def initialize
  end

  def start
    @stop_client = false
    log "Start"
    loop do
      # Thread.pass
      if stop?
        log "Stopped"
        break
      end
      response = queue_service_client.receive_benchmark_job({instance_name: "dummy-#$$-#{Thread.current.object_id.to_s(16)}"})
      if response.job_handle
        log "Received job: #{response.job_handle}"
        do_benchmark(response.job_handle)
      else
        log "Received no job"
        sleep 5
      end
    end
  end

  def do_benchmark(job_handle)
    call = report_service_client.report_benchmark_result
    log "Executing benchmark..."
    request = report_service_client.make_request({
      job_id: job_handle.job_id,
      handle: job_handle.handle,
      nonce: 0,
      result: {
        marked_at: Time.now,
        finished: false,
        score: 100,
        score_breakdown: {
          raw: 100,
          deduction: 0,
        },
      },
    })
    log "Request: #{request.inspect}"
    call.send_msg(request)
    log "Waiting ACK"
    wait_ack = Fiber.new do
      log "fiber open"
      call.each do |msg|
        p msg
        Fiber.yield
      end
      log "fiber break"
    end
    wait_ack.resume

    sleep 1

    request = report_service_client.make_request({
      job_id: job_handle.job_id,
      handle: job_handle.handle,
      nonce: 1,
      result: {
        marked_at: Time.now,
        finished: true,
        passed: true,
        score: 1000,
        score_breakdown: {
          raw: 1200,
          deduction: 200,
        },
        execution: {
          reason: 'REASON',
          stdout: 'succeeded',
          stderr: 'no error',
          exit_status: 0,
          exit_signal: 0,
          signaled: false,
        },
      },
    })
    log "Finished benchmark! result=#{request}"
    call.send_msg(request)
    log "Waiting ACK"
    wait_ack.resume
    log "Complete benchmark job"
  end

  def queue_service_client
    @queue_service_client ||= QueueServiceClient.new
  end

  def report_service_client
    @report_service_client ||= ReportServiceClient.new
  end

  def log(str)
    puts "[#$$-#{Thread.current.object_id}] #{str}"
  end

  def stop
    @stop_client = true
  end

  def stop?
    @stop_client
  end
end

threads = []
NUM_THREADS.times do
  threads << Thread.new do
    Thread.current[:client] = BenchmarkClient.new
    Thread.current[:client].start
  end
end


threads.each(&:join)
