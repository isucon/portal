class AddTargetIdToBenchmarkJobs < ActiveRecord::Migration[6.0]
  def change
    add_column :benchmark_jobs, :target_id, :integer
  end
end
