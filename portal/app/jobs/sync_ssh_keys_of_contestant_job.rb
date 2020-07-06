class SyncSshKeysOfContestantJob < ApplicationJob
  self.log_arguments = false
  def perform(contestant, access_token)
    @access_token = access_token

    Rails.logger.info "Syncing SSH keys of GitHub user #{contestant.github_login} (#{contestant.github_id}), contestant_id=#{contestant.id}"

    keys = octokit.user_keys(contestant.github_login)
    existing_keys = contestant.ssh_public_keys.to_a
    removed_keys = existing_keys.dup

    keys.each do |key|
      public_key = key['key']
      existing_key = existing_keys.find { |_| _.public_key == public_key }
      if existing_key
        removed_keys.delete(existing_key)
      else
        contestant.ssh_public_keys.create!(public_key: public_key)
      end
    end
    removed_keys.each(&:destroy!)
  end

  private def octokit
    @octokit ||= Octokit::Client.new(access_token: @access_token, auto_paginate: true)
  end
end
