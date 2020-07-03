class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.integer :leader_id
      t.boolean :is_hidden, null: false, default: false
      t.boolean :final_participation, null: false, default: false
      t.string :email_address, null: false
      t.string :invite_token, null: false

      t.timestamps
    end
  end
end
