class UpdateContestantDashboardJob < ApplicationJob
  def perform
    Rails.logger.info("leaderboard")
    lb = Contest.leaderboard(admin: false, team: nil, progresses: false)
    Rails.logger.info("leaderboard done")
    lb_wire = lb.class.encode(lb)
    Rails.logger.info("leaderboard encode")

    teams = Team.active.to_a
    teams.each_with_index do |team,i|
      Rails.logger.info "team_id=#{team.id} (#{i+1}/#{teams.size})"
      lb2 = lb.class.decode(lb_wire)
      lb_team = Contest.leaderboard(admin: false, team: team, progresses: false, solo: true)
      lb2.teams.concat lb_team.teams.to_a
      lb2.general_teams.concat lb_team.general_teams.to_a
      lb2.student_teams.concat lb_team.student_teams.to_a
      lb2.generated_at = lb_team.generated_at

      lb2.teams.sort_by! { |li| s = li.scores[-1]; [s.score, -s.marked_at.seconds, -s.marked_at.nanos] }
      lb2.general_teams.sort_by! { |li| s = li.scores[-1]; [s.score, -s.marked_at.seconds, -s.marked_at.nanos] }
      lb2.student_teams.sort_by! { |li| s = li.scores[-1]; [s.score, -s.marked_at.seconds, -s.marked_at.nanos] }
      Rails.cache.write("contestantdashboard3-t#{team.id}", lb2.class.encode(lb2), expires_in: 12.hours)
    end
  end
end
