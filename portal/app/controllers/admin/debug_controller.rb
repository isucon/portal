class Admin::DebugController < Admin::ApplicationController
  skip_before_action :require_staff, only: %i(long_running_check)

  def slack
    SlackWebhookJob.perform_later(text: "test test test")
    render plain: 'slacktown'
  end

  def sync_all_ssh_key
    SyncSshKeysOfAllContestantsJob.perform_later(github_login.fetch('token'))
    render plain: 'enqueued'
  end

  def ssh_key_stats
    result = []
    Team.active.includes(members: :ssh_public_keys).find_in_batches do |batch|
      batch.each do |team|
        not_present_all = team.members.all? { |contestant| contestant.ssh_public_keys.empty? }
        members_wo_ssh_keys = team.members.select{ |c|  c.ssh_public_keys.empty? }.map { |c| "#{c.name} (##{c.id}, #{c.github_login}/#{c.github_id}, #{c.discord_tag})" }
        unless members_wo_ssh_keys.empty?
          result << "#{team.name} (##{team.id}): #{not_present_all ? '*全員無登録*' : ''} #{members_wo_ssh_keys.join(', ')}"
        end
      end
    end
    render plain: result.join("\n")
  end

  def long_running_check
    LongRunningCheckJob.perform_later
    render plain: 'enqueud'
  end
end
