require 'time'

namespace :isu do
  task :shift_benchmark_time, [:time_str] => :environment do |t, args|
    raise "only run in development" unless Rails.env.development?

    time = Time.parse(args[:time_str])

    original_time_base = BenchmarkJob.order(started_at: :asc).where.not(started_at: nil).limit(1).pluck(:started_at).fetch(0)
    shift_duration = time - original_time_base

    ApplicationRecord.transaction do
      BenchmarkJob.includes(:target, :team, :benchmark_result).find_in_batches do |batch|
        batch.each do |job|
          job.assign_attributes(
            started_at: job.started_at&.yield_self { |_| _ + shift_duration },
            finished_at: job.finished_at&.yield_self { |_| _ + shift_duration },
          )
          job.save!(validate: false)
        end
      end

      BenchmarkResult.includes(:team, :benchmark_job).find_in_batches do |batch|
        batch.each do |r|
          r.assign_attributes(
            marked_at: r.marked_at&.yield_self { |_| _ + shift_duration },
          )
          r.save!(validate: false)
        end
      end
    end
  end
end
