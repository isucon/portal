class ClearContestDataJob < ApplicationJob
  def perform
    ApplicationRecord.transaction do
      Team.find_in_batches do |ts|
        ts.each do |t|
          t.update!(
            best_benchmark_result_id: nil,
            best_benchmark_result_for_audience_id: nil,
            best_benchmark_result_for_admin_id: nil,
          )
        end
      end

      BenchmarkResult.delete_all
      BenchmarkJob.delete_all
      SurveyResponse.delete_all
      Clarification.delete_all
      ContestantInstance.delete_all
    end
  end
end
