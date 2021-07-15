class SyncDiscordMemberStateOfAllContestantJob < ApplicationJob
  LIMIT = 1000
  self.log_arguments = false
  def perform()
    Rails.logger.info "Syncing discord guild member state of ALL contestants"

    member_discord_ids = Set.new
    after = nil
    while true
      m = JSON.parse(Discordrb::API::Server.resolve_members(
        discord_token,
        server_id,
        LIMIT,
        after
      ))
      member_discord_ids.merge(m.map{ |_| _['user']['id'] })
      after = m.length > 0 ? m.last['user']['id'] : nil

      break if m.length < LIMIT
    end

    Contestant.order(id: :desc).find_in_batches do |batch|
      discord_ids = batch.map{ |_| _.discord_id }.to_set
      guild_member_discord_ids = member_discord_ids & discord_ids
      non_guild_member_discord_ids = discord_ids - guild_member_discord_ids

      Rails.logger.info "Syncing discord guild member state of ALL contestants: batch (guild_member=#{guild_member_discord_ids.size}, non_guild_member=#{non_guild_member_discord_ids.size})"
      Contestant.where(discord_id: guild_member_discord_ids).update_all(is_discord_guild_member: true)
      Contestant.where(discord_id: non_guild_member_discord_ids).update_all(is_discord_guild_member: false)
    end
  end

  private def discord_token
    @discord_token ||= "Bot #{Rails.application.config.x.discord.bot_token}"
  end

  private def server_id
    Rails.application.config.x.discord.server_id
  end
end
