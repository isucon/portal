class CreateNotifications < ActiveRecord::Migration[6.0]
  def change
    create_table :notifications do |t|
      t.integer :contestant_id, null: false
      t.boolean :read, null: false, default: false
      t.text :encoded_message, null: false

      t.timestamps
    end

    add_index :notifications, [:contestant_id, :id]
    add_index :notifications, [:contestant_id, :read, :id]
  end
end
