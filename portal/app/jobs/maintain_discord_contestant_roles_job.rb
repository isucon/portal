class MaintainDiscordContestantRolesJob < ApplicationJob
  def perform(contestant, force_discord_id: nil)
    @contestant = contestant
    @force_discord_id = force_discord_id # in case of contestant deletion

    roles_to_add = desired_roles - present_roles
    roles_to_remove = present_roles & (roles_to_manage - desired_roles)

    Rails.logger.info("contestant=#{contestant&.id} discord_id=#{user_id} discord_tag=#{contestant&.discord_tag}, roles_to_add=#{roles_to_add.inspect}, roles_to_remove=#{roles_to_remove.inspect}")
    roles_to_add.each do |role|
      Rails.logger.info "add_member_role: contestant=#{contestant&.id} discord_id=#{user_id} discord_tag=#{contestant&.discord_tag}, role=#{role}"
      Rails.logger.info Discordrb::API::Server.add_member_role(discord_token, server_id, user_id, role)
    end
    roles_to_remove.each do |role|
      Rails.logger.info "remove_member_role: contestant=#{contestant&.id} discord_id=#{user_id} discord_tag=#{contestant&.discord_tag}, role=#{role}"
      Rails.logger.info Discordrb::API::Server.remove_member_role(discord_token, server_id, user_id, role)
    end

    if contestant && roles_to_add.include?(basic_role)
      nick = "#{contestant.name} (#{contestant.team.name})"[0,32]
      Rails.logger.info "update_member(nick): contestant=#{contestant.id} discord_id=#{contestant.discord_id} discord_tag=#{contestant.discord_tag}, nick=#{nick}"
      Rails.logger.info Discordrb::API::Server.update_member(discord_token, server_id, contestant.discord_id, nick: nick)
    end
  rescue RestClient::NotFound => e
    Rails.logger.warn "NotFound: #{@contestant&.name.inspect} (#{@contestant&.team&.name.inspect}), team_id=#{@contestant&.team_id}, contestant_id=#{@contestant&.id}, force_discord_id=#{@force_discord_id}, #{e.inspect}"
  end

  private def basic_role
    Rails.application.config.x.discord.contestant_role_id
  end

  private def roles_to_manage
    @roles_to_manage ||= [
      basic_role,
      Rails.application.config.x.discord.contestant_final_role_id,
      Rails.application.config.x.discord.contestant_qualify_role_id,
    ].select(&:present?).sort
  end

  private def desired_roles
    @desired_roles ||= @contestant&.active? ? [
      basic_role,
      Rails.application.config.x.discord.contestant_qualify_role ? Rails.application.config.x.discord.contestant_qualify_role_id : nil,
      Rails.application.config.x.discord.contestant_final_role && @contestant&.team&.final_participation? ? Rails.application.config.x.discord.contestant_final_role_id : nil,
    ].select(&:present?).sort : []
  end

  private def present_roles
    @present_roles ||= JSON.parse(Discordrb::API::Server.resolve_member(discord_token, server_id, user_id).body).fetch('roles')
  end

  private def user_id
    @force_discord_id ||= @contestant.discord_id
  end

  private def server_id
    Rails.application.config.x.discord.server_id
  end

  private def discord_token
    @discord_token ||= "Bot #{Rails.application.config.x.discord.bot_token}"
  end
end
