class CreateExtraTimeAssignments < ActiveRecord::Migration[6.0]
  def change
    create_table :extra_time_assignments do |t|
      t.references :team, null: false, foreign_key: true
      t.boolean :final, null: false
      t.integer :seconds, null: false

      t.timestamps
    end

    add_index :extra_time_assignments, [:team_id, :final], unique: true
  end
end
