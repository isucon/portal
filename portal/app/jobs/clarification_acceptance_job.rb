class ClarificationAcceptanceJob < ApplicationJob
  def perform(clar)
    slack_messages = [
      ":mailbox_with_mail: Clarification request ##{clar.id} from #{clar.team.name} (##{clar.team.id}) <https://#{default_url_options.fetch(:host)}/admin/clarifications/#{clar.id}|Open>",
    ]
    SlackWebhookJob.perform_now(text: slack_messages.join(?\n))
  end
end
