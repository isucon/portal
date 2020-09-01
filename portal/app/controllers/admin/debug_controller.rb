class Admin::DebugController < Admin::ApplicationController
  def slack
    SlackWebhookJob.perform_later(text: "test test test")
    render plain: 'slacktown'
  end

  def sync_all_ssh_key
    SyncSshKeysOfAllContestantsJob.perform_later(github_login.fetch('token'))
    render plain: 'enqueued'
  end
end
