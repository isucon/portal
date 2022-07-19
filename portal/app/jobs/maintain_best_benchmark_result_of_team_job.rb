class MaintainBestBenchmarkResultOfTeamJob < ApplicationJob
  def perform(team:, now: nil)
    ApplicationRecord.transaction do
      team.update!(
        best_benchmark_result_id: scoped_benchmark_results(team: team, now: now, visibility: :contestant).order(score: :desc).limit(1).pluck(:id)&.first,
        best_benchmark_result_for_audience_id: scoped_benchmark_results(team: team, now: now, visibility: :audience).order(score: :desc).limit(1).pluck(:id)&.first,
        best_benchmark_result_for_admin_id: scoped_benchmark_results(team: team, now: now, visibility: :admin).order(score: :desc).limit(1).pluck(:id)&.first,
      )
    end
  end

  def scoped_benchmark_results(team:, now:, visibility:)
    benchmark_results = team.benchmark_results
      .successfully_finished
      .of_visibility(visibility, team)
    if now
      benchmark_results = benchmark_results.where('marked_at <= ?', now)
    end

    benchmark_results
  end

end
