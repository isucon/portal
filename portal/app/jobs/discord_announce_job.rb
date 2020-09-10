class DiscordAnnounceJob < ApplicationJob
  def perform(text)
    Discordrb::API::Channel.create_message(
      discord_token,
      channel_id,
      text
    )
  end

  private def channel_id
    Rails.application.config.x.discord.channel_id
  end

  private def discord_token
    @discord_token ||= "Bot #{Rails.application.config.x.discord.bot_token}"
  end
end
