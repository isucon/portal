class CreateCoupons < ActiveRecord::Migration[6.0]
  def change
    create_table :coupons do |t|
      t.integer :team_id, null:false
      t.string :code, null:false
      t.boolean :activate, null:false, default: false

      t.timestamps
    end
  end
end
