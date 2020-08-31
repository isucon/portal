class Admin::DebugController < Admin::ApplicationController
  def slack
    SlackWebhookJob.perform_later(text: "test test test")
    render plain: 'slacktown'
  end
end
