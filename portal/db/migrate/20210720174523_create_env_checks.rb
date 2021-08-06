class CreateEnvChecks < ActiveRecord::Migration[6.0]
  def change
    create_table :env_checks, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci", force: :cascade do |t|
      t.integer :team_id, null: false
      t.string :name, null: false
      t.string :ip_address, null: false
      t.boolean :passed, null: false
      t.string :message, null: false
      t.string :admin_message, null: false
      t.string :raw_data, null: false

      t.timestamps
    end
  end
end
