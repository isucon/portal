class CreateBenchmark < ActiveRecord::Migration[6.0]
  def change
    create_table :benchmark_jobs do |t|
      t.integer :team_id, null: false

      t.integer :status, null: false, default: 0

      t.string :instance_name
      t.string :handle

      t.datetime :started_at
      t.datetime :finished_at

      t.timestamps
    end

    add_index :benchmark_jobs, [:status, :team_id, :id]
    add_index :benchmark_jobs, [:team_id, :id]
    add_index :benchmark_jobs, [:instance_name, :id]

    create_table :benchmark_results do |t|
      t.integer :team_id, null: false
      t.integer :benchmark_job_id, null: false

      t.integer :score, null: false, default: 0
      t.integer :score_raw, null: false, default: 0
      t.integer :score_deduction, null: false, default: 0

      t.boolean :finished, null: false
      t.boolean :passed

      t.datetime :marked_at, null: false

      t.text :reason
      t.text :stdout
      t.text :stderr

      t.integer :exit_status
      t.integer :exit_signal

      t.timestamps
    end

    add_index :benchmark_results, [:team_id]
    add_index :benchmark_results, [:benchmark_job_id], unique: true

    create_table :benchmark_executions do |t|

      t.timestamps
    end

  end
end
