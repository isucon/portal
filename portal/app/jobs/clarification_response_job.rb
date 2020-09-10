class ClarificationResponseJob < ApplicationJob
  def perform(clar, was_answered)
    if clar.disclosed?
      case
      when clar.admin? && !was_answered
        DiscordAnnounceJob.perform_now(":loudspeaker: 新しいアナウンスが投稿されました (##{clar.id}) https://#{default_url_options.fetch(:host)}/contestant/clarifications")
      when clar.admin? && was_answered
        DiscordAnnounceJob.perform_now(":loudspeaker: アナウンスが更新されました (##{clar.id}) https://#{default_url_options.fetch(:host)}/contestant/clarifications")
      when !was_answered
        DiscordAnnounceJob.perform_now(":loudspeaker: 新しい質問と回答が公開されました (##{clar.id}) https://#{default_url_options.fetch(:host)}/contestant/clarifications")
      else
        DiscordAnnounceJob.perform_now(":loudspeaker: 質問と回答が更新されました (##{clar.id}) https://#{default_url_options.fetch(:host)}/contestant/clarifications")
      end
    end
  end
end
