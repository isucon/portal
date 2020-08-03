# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: isuxportal/resources/benchmark_result.proto

require 'google/protobuf'

require 'google/protobuf/timestamp_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("isuxportal/resources/benchmark_result.proto", :syntax => :proto3) do
    add_message "isuxportal.proto.resources.BenchmarkResult" do
      optional :finished, :bool, 1
      optional :passed, :bool, 2
      optional :score, :int64, 3
      optional :score_breakdown, :message, 4, "isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown"
      optional :execution, :message, 5, "isuxportal.proto.resources.BenchmarkResult.Execution"
      optional :marked_at, :message, 6, "google.protobuf.Timestamp"
    end
    add_message "isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown" do
      optional :raw, :int64, 1
      optional :deduction, :int64, 2
    end
    add_message "isuxportal.proto.resources.BenchmarkResult.Execution" do
      optional :reason, :string, 1
      optional :stdout, :string, 2
      optional :stderr, :string, 3
      optional :exit_status, :int64, 4
      optional :exit_signal, :int64, 5
      optional :signaled, :bool, 6
    end
  end
end

module Isuxportal
  module Proto
    module Resources
      BenchmarkResult = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.resources.BenchmarkResult").msgclass
      BenchmarkResult::ScoreBreakdown = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown").msgclass
      BenchmarkResult::Execution = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.resources.BenchmarkResult.Execution").msgclass
    end
  end
end
