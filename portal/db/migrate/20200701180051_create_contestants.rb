class CreateContestants < ActiveRecord::Migration[6.0]
  def change
    create_table :contestants do |t|
      t.integer :team_id, null: false
      t.string :name, null: false
      t.string :github_login, null: false
      t.string :discord_user_id, null: false
      t.string :avatar_url, null: false
      t.boolean :student, null: false, default: false
      t.boolean :withdrawn, null: false, default: false

      t.timestamps
    end
  end
end
