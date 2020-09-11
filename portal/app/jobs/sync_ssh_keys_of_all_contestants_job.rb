class SyncSshKeysOfAllContestantsJob < ApplicationJob
  self.log_arguments = false
  def perform(access_token, no_key_only: false)
    Rails.logger.info "Syncing ssh public keys of ALL contestants"
    Contestant.order(id: :desc).includes(:ssh_public_keys).find_in_batches do |batch|
      without_keys, with_keys = batch.partition{ |_| _.ssh_public_keys.empty? }
      Rails.logger.info "Syncing ssh public keys of ALL contestants: batch (without=#{without_keys.size}, with=#{with_keys.size})"
      without_keys.each_with_index do |c,idx|
        Rails.logger.info "Syncing ssh public keys of ALL contestants: batch without_keys (#{idx+1}/#{without_keys.size}) contestant_id=#{c.id} contestant.github_login=#{c.github_login} contestant.name=#{c.name}"
        perform_contestant(c, access_token)
      end
      unless no_key_only
        with_keys.each_with_index do |c,idx|
          Rails.logger.info "Syncing ssh public keys of ALL contestants: batch with_keys (#{idx+1}/#{with_keys.size}) contestant_id=#{c.id} contestant.github_login=#{c.github_login} contestant.name=#{c.name}"
          perform_contestant(c, access_token)
        end
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
