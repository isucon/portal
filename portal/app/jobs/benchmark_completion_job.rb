class BenchmarkCompletionJob < ApplicationJob
  def perform(job)
    slack_messages = [
      ":hourglass: Benchmark Job ##{job.id} completed for #{job.team.name} (##{job.team.id}) <https://#{default_url_options.fetch(:host)}/admin/benchmark_jobs/#{job.id}|Open>",
    ]
    if job.errored?
      slack_messages << ":warning: *ERRORED*"
    end
    if job.benchmark_result
      result = job.benchmark_result
      slack_messages << ""
      slack_messages << "> *#{result.passed? ? "Passed" : "Failed"}, score=#{result.score}* (raw=#{result.score_raw},deduction=#{result.score_deduction})"
      slack_messages << "> reason=#{result.reason}" if result.reason.present?
      slack_messages << "> exit_status=#{result.exit_status}, signaled=#{result.signaled?}, exit_signal=#{result.exit_signal}" unless result.successfully_exited?
    end
    SlackWebhookJob.perform_now(text: slack_messages.join(?\n))
  end
end
