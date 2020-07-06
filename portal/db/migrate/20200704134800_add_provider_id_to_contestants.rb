class AddProviderIdToContestants < ActiveRecord::Migration[6.0]
  def change
    add_column :contestants, :github_id, :string, null: false
    add_column :contestants, :discord_tag, :string, null: false
    rename_column :contestants, :discord_user_id, :discord_id
    add_index :contestants, :github_id, unique: true
    add_index :contestants, :discord_id, unique: true
  end
end
