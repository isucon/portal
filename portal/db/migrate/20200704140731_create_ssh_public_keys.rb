class CreateSshPublicKeys < ActiveRecord::Migration[6.0]
  def change
    create_table :ssh_public_keys do |t|
      t.integer :contestant_id, null: false
      t.text :public_key, null: false

      t.timestamps
    end
    add_index :ssh_public_keys, :contestant_id
  end
end
