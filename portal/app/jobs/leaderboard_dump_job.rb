class LeaderboardDumpJob < ApplicationJob
  def perform(now)
    lb = Contest.leaderboard(admin: true, team: nil, progresses: false, solo: false, now: now)

    targets = {}
    lb.teams.each do |item|
      job = BenchmarkJob.where(team_id: item.team.id).order(id: :desc).limit(1).first
      next unless job
      targets[item.team.id] = job.target
    end
    lb.teams.each_with_index do |item,idx|
      log_data(
        position: idx+1,
        team_id: item.team.id,
        team_name: item.team.name,
        student: item.team.student.status,
        best_score: item.best_score&.score,
        latest_score: item.latest_score&.score,
        latest_score_at: item.latest_score&.marked_at&.seconds&.yield_self{ |ts| Time.at(ts).xmlschema },
        target: targets[item.team.id]&.id,
        target_ip: targets[item.team.id]&.public_ipv4_address,
      )
    end
    nil
  end

  private def log_data(hash)
    Rails.logger.info "DATADATA #{hash.to_json}"
  end
end
