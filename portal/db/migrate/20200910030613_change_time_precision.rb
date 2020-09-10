class ChangeTimePrecision < ActiveRecord::Migration[6.0]
  def change
    change_column :benchmark_jobs, :started_at, :datetime, precision: 6
    change_column :benchmark_jobs, :finished_at, :datetime, precision: 6
    change_column :benchmark_results, :marked_at, :datetime, precision: 6
    change_column :clarifications, :answered_at, :datetime, precision: 6
  end
end
