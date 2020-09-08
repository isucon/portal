class CreateContestantInstances < ActiveRecord::Migration[6.0]
  def change
    create_table :contestant_instances do |t|
      t.integer :team_id, null: false
      t.string :cloud_id, null: false
      t.integer :number, null: false
      t.integer :status, null: false
      t.string :private_ipv4_address, null: false
      t.string :public_ipv4_address

      t.timestamps
    end

    add_index :contestant_instances, [:team_id, :number]
    add_index :contestant_instances, [:cloud_id]
    add_index :contestant_instances, [:status]
    add_index :contestant_instances, [:private_ipv4_address]
  end
end
