class AddLeaderboardIndexToBenchmarkResults < ActiveRecord::Migration[6.1]
  def change
    add_index :benchmark_results, [:finished,:exit_status,:exit_signal,:team_id,:marked_at,:id], name: 'idx_leaderboard2' # for leaderboard(history: false)
    add_index :benchmark_results, [:team_id,:updated_at] # for contestant dashboard etag
  end
end
