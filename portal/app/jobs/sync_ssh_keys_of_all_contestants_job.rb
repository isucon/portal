class SyncSshKeysOfAllContestantsJob < ApplicationJob
  self.log_arguments = false
  def perform(access_token)
    Contestant.order(id: :desc).includes(:ssh_public_keys).find_in_batches do |batch|
      without_keys, with_keys = batch.partition{ |_| _.ssh_public_keys.empty? }
      without_keys.each do |c|
        perform_contestant(c, access_token)
      end
      with_keys.each do |c|
        perform_contestant(c, access_token)
      end
    end
  end

  private def perform_contestant(c, access_token)
    SyncSshKeysOfContestantJob.perform_now(c, access_token)
    sleep 2
  rescue Octokit::NotFound, OpenURI::HTTPError => e
    Rails.logger.warn "#{e.inspect}"
    Raven.capture_exception(e, level: :warning)
  rescue Octokit::TooManyRequests => e
    Rails.logger.warn "#{e.inspect}"
    sleep 30
    retry
  end

end
