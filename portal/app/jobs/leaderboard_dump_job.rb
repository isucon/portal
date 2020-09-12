class LeaderboardDumpJob < ApplicationJob
  def perform(now)
    lb = Contest.leaderboard(admin: true, team: nil, progresses: false, solo: false, now: now)
    lb.teams.each_with_index do |item,idx|
      log_data(
        position: idx+1,
        team_id: item.team.id,
        team_name: item.team.name,
        student: item.team.student.status,
        best_score: item.best_score&.score,
        latest_score: item.latest_score&.score,
        latest_score_at: item.latest_score&.marked_at&.seconds,
      )
    end
    nil
  end

  private def log_data(hash)
    Rails.logger.info "DATADATA #{hash.to_json}"
  end
end
