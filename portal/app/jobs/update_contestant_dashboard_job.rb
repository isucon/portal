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
      
      lteams = lb2.teams.to_a + lb_team.teams.to_a
      lgeneral_teams = lb2.general_teams.to_a + lb_team.general_teams.to_a
      lstudent_teams = lb2.student_teams.to_a + lb_team.student_teams.to_a

      lb2.generated_at = lb_team.generated_at

      lteams.sort_by! { |li| s = li.scores[-1]; [s.score, -s.marked_at.seconds, -s.marked_at.nanos] }
      lgeneral_teams.sort_by! { |li| s = li.scores[-1]; [s.score, -s.marked_at.seconds, -s.marked_at.nanos] }
      lstudent_teams.sort_by! { |li| s = li.scores[-1]; [s.score, -s.marked_at.seconds, -s.marked_at.nanos] }

      lb2.teams = lteams
      lb2.general_teams = lgeneral_teams
      lb2.student_teams = lstudent_teams

      resp = Isuxportal::Proto::Services::Contestant::DashboardResponse.encode(Isuxportal::Proto::Services::Contestant::DashboardResponse.new(leaderboard: lb2))
      Rails.cache.write("contestantdashboard3-t#{team.id}", resp, expires_in: 12.hours)
    end
  end
end
