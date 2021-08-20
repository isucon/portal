require 'time'

namespace :isu do
  task :shift_benchmark_time, [:time_str] => :environment do |t, args|
    raise "only run in development" unless Rails.env.development?

    time = Time.parse(args[:time_str])

    original_time_base = BenchmarkJob.order(created_at: :asc).limit(1).pluck(:created_at).fetch(0)
    shift_duration = time - original_time_base

    ApplicationRecord.transaction do
      BenchmarkJob.includes(:target, :team, :benchmark_result).find_in_batches do |batch|
        batch.each do |job|
          job.update!(
            started_at: job.started_at&.yield_self { |_| _ + shift_duration },
            finished_at: job.finished_at&.yield_self { |_| _ + shift_duration },
          )
        end
      end

      BenchmarkResult.includes(:team, :benchmark_job).find_in_batches do |batch|
        batch.each do |r|
          r.update!(
            marked_at: r.marked_at&.yield_self { |_| _ + shift_duration },
          )
        end
      end
    end
  end
end
