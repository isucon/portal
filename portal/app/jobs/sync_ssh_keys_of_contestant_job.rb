require 'open-uri'

class SyncSshKeysOfContestantJob < ApplicationJob
  self.log_arguments = false
  def perform(contestant, access_token)
    @access_token = access_token

    Rails.logger.info "Syncing SSH keys of GitHub user #{contestant.github_login} (#{contestant.github_id}), contestant_id=#{contestant.id}"

    keys = begin
      octokit.user_keys(contestant.github_id.to_i).map { |_| _['key'] }
    rescue Octokit::NotFound => e
      Rails.logger.warn "Syncing SSH keys of contestant_id=#{contestant.id} failed with GitHub API (#{contestant.github_id}, #{contestant.github_login}): #{e.inspect}"
      begin
        URI.open("https://github.com/#{contestant.github_login.gsub(/[^a-z0-9]/i, '')}.keys", 'r', &:read).lines.map(&:chomp).reject(&:blank?)
      rescue OpenURI::HTTPError => e2
        Rails.logger.warn "Syncing SSH keys of contestant_id=#{contestant.id} failed with github.com/*.keys (#{contestant.github_id}, #{contestant.github_login}): #{e2.inspect}"
        raise
      end
    rescue Octokit::Unauthorized => e
      Rails.logger.warn "Syncing SSH keys of contestant_id=#{contestant.id} failed (#{contestant.github_id}, #{contestant.github_login}): #{e.inspect}"
      return
    end

    existing_keys = contestant.ssh_public_keys.to_a
    removed_keys = existing_keys.dup

    ApplicationRecord.transaction do
      keys.each do |public_key|
        existing_key = existing_keys.find { |_| _.public_key == public_key }
        if existing_key
          removed_keys.delete(existing_key)
        else
          contestant.ssh_public_keys.create!(public_key: public_key)
        end
      end
      removed_keys.each(&:destroy!)
    end
  end

  private def octokit
    @octokit ||= Octokit::Client.new(access_token: @access_token, auto_paginate: true)
  end
end
