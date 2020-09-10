class LongRunningCheckJob < ApplicationJob
  include ActionView::Helpers::DateHelper

  def perform
    messages = []

    Clarification.includes(:team).unanswered.requested.where('created_at <= ?', 2.minutes.ago).each do |clar|
      messages << ":warning: Remaining *unanswered clarification* ##{clar.id} from #{clar.team.name} (##{clar.team.id}), #{distance_of_time_in_words_to_now(clar.created_at, include_seconds: true)} <https://#{default_url_options.fetch(:host)}/admin/clarifications/#{clar.id}|Open>"
    end

    BenchmarkJob.includes(:team).active.where('created_at <= ?', 90.seconds.ago).each do |job|
      messages << ":warning: *Long running benchmark* job ##{job.id} _#{job.status}_ from #{job.team.name} (##{job.team.id}), #{distance_of_time_in_words_to_now(job.created_at, include_seconds: true)} <https://#{default_url_options.fetch(:host)}/admin/benchmark_jobs/#{job.id}|Open>"

    end

    messages.each do |msg|
      Rails.logger.info msg
    end
    SlackWebhookJob.perform_now(text: messages.join(?\n)) unless messages.empty?
  end
end
