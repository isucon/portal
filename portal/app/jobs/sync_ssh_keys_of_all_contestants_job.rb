class SyncSshKeysOfAllContestantsJob < ApplicationJob
  self.log_arguments = false
  def perform(access_token)
    Contestant.find_in_batches do |batch|
      batch.each do |c|
        SyncSshKeysOfContestantJob.perform_now(c, access_token)
        sleep 2
      rescue Octokit::NotFound => e
        Rails.logger.warn "#{e.inspect}"
        Raven.capture_exception(e, level: :warning)
      rescue Octokit::TooManyRequests => e
        Rails.logger.warn "#{e.inspect}"
        sleep 30
        retry
      end
    end
  end
end
