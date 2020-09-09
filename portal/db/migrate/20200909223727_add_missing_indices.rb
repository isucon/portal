class AddMissingIndices < ActiveRecord::Migration[6.0]
  def change
    add_index :benchmark_results, [:updated_at]
    add_index :benchmark_results, [:finished, :exit_status, :exit_signal, :marked_at, :team_id], name: 'idx_leaderboard'
    add_index :teams, [:withdrawn, :disqualified, :final_participation], name: 'idx_active_final'
    add_index :clarifications, [:team_id, :created_at]
    add_index :clarifications, [:disclosed, :created_at]
    add_index :contestants, [:team_id]
    add_index :survey_responses, [:team_id]
    add_index :survey_responses, [:benchmark_job_id]
  end
end
