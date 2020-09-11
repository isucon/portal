class CreatePushSubscriptions < ActiveRecord::Migration[6.0]
  def change
    create_table :push_subscriptions do |t|
      t.integer :contestant_id, null: false
      t.string :endpoint, null: false
      t.string :p256dh, null: false
      t.string :auth, null: false

      t.timestamps
    end

    add_index :push_subscriptions, [:contestant_id, :endpoint]
  end
end
