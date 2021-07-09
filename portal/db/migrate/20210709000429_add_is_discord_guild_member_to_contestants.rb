class AddIsDiscordGuildMemberToContestants < ActiveRecord::Migration[6.0]
  def change
    add_column :contestants, :is_discord_guild_member, :boolean, null: false, default: false
  end
end
