class AddBestBenchmarkResultIdToTeams < ActiveRecord::Migration[6.1]
  def change
    add_reference :teams, :best_benchmark_result, null: true
    add_reference :teams, :best_benchmark_result_for_audience, null: true
    add_reference :teams, :best_benchmark_result_for_admin, null: true

    Team.reset_column_information
    Team.find_in_batches do |batch|
      batch.each do |team|
        MaintainBestBenchmarkResultOfTeamJob.perform_now(team: team)
      end
    end
  end
end
