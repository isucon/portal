class AddPassedIndexToBenchmarkResult < ActiveRecord::Migration[6.0]
  def change
    add_index :benchmark_results, [:passed]
  end
end
