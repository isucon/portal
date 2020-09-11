require 'isuxportal/resources/notification_pb'

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

      n = Notification.new(
        message: Isuxportal::Proto::Resources::Notification.new(
          content_clarification: Isuxportal::Proto::Resources::Notification::ClarificationMessage.new(
            clarification_id: clar.id,
            updated: was_answered,
            admin: clar.admin?,
            owned: false,
          ),
        ),
      )
      target = Contestant.active
      target = target.where.not(team_id: clar.team_id) if clar.team_id
      now = clar.updated_at

      target.pluck(:id).each_slice(150) do |batch|
        Notification.insert_all!(
          batch.map do |contestant_id|
            { contestant_id: contestant_id, created_at: now, updated_at: now, encoded_message: n.encoded_message }
          end
        )
      end
    end

    if clar.team_id
      message = Isuxportal::Proto::Resources::Notification.new(
        content_clarification: Isuxportal::Proto::Resources::Notification::ClarificationMessage.new(
          clarification_id: clar.id,
          updated: was_answered,
          admin: clar.admin?,
          owned: true,
        ),
      )
      clar.team.members.each do |contestant|
        n = Notification.create!(
          contestant: contestant,
          message: message,
        )
        DeliverPushNotificationJob.perform_later(n)
      end
    end
  end
end
