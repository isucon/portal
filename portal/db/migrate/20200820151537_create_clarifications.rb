class CreateClarifications < ActiveRecord::Migration[6.0]
  def change
    create_table :clarifications do |t|
      t.integer :team_id
      t.boolean :disclosed
      t.text :question
      t.text :answer
      t.text :original_question
      t.datetime :answered_at

      t.timestamps
    end
  end
end
