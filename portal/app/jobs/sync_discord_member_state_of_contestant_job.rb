class SyncDiscordMemberStateOfContestantJob < ApplicationJob
  self.log_arguments = false
  def perform(contestant)
    Rails.logger.info "Syncing discord guild member state of discord user #{contestant.discord_tag} (#{contestant.discord_id}), contestant_id=#{contestant.id}"

    is_member = begin
      Discordrb::API::Server.resolve_member(
        discord_token,
        server_id,
        contestant.discord_id
      )
    rescue RestClient::NotFound => e
      false
    end

    contestant.update!(
      is_discord_guild_member: is_member,
    )
  end

  private def discord_token
    @discord_token ||= "Bot #{Rails.application.config.x.discord.bot_token}"
  end

  private def server_id
    Rails.application.config.x.discord.server_id
  end
end
