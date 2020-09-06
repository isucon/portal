class CreateSurveyResponses < ActiveRecord::Migration[6.0]
  def change
    create_table :survey_responses do |t|
      t.integer :team_id
      t.integer :benchmark_job_id
      t.string :language

      t.timestamps
    end
  end
end
