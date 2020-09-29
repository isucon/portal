require 'isuxportal/resources/leaderboard_pb'
require 'isuxportal/services/contestant/dashboard_pb'
require 'isuxportal/services/audience/dashboard_pb'

class UpdateContestantDashboardJob < ApplicationJob
  def perform(team: nil, frozen: false)
    final = Rails.application.config.x.final ? "final" : "qualify"

    Rails.logger.info("leaderboard")
    lb = Contest.leaderboard(admin: false, team: nil, progresses: false)
    Rails.logger.info("leaderboard done")
    lb_wire = lb.class.encode(lb)
    Rails.logger.info("leaderboard encode")


    lb_resp = Isuxportal::Proto::Services::Contestant::DashboardResponse.encode(Isuxportal::Proto::Services::Contestant::DashboardResponse.new(leaderboard: lb))
    audience_lb_resp = Isuxportal::Proto::Services::Audience::DashboardResponse.encode(Isuxportal::Proto::Services::Audience::DashboardResponse.new(leaderboard: lb))
    Rails.cache.write("dashboard:#{final}:contestant:public", lb_resp)
    Rails.cache.write("dashboard:#{final}:audience:public", audience_lb_resp)

    if frozen
      teams = team ? [team] : Team.active
      teams.each_with_index do |team,i|
        Rails.logger.info "frozen=true team_id=#{team.id} (#{i+1}/#{teams.size})"
        lb2 = lb.class.decode(lb_wire)
        team_lb = Contest.leaderboard(admin: false, team: team, progresses: false, solo: true)

        lteams = lb2.teams.to_a.reject{ |_| _.team.id == team.id } + team_lb.teams.to_a
        lgeneral_teams = lb2.general_teams.to_a.reject{ |_| _.team.id == team.id } + team_lb.general_teams.to_a
        lstudent_teams = lb2.student_teams.to_a.reject{ |_| _.team.id == team.id } + team_lb.student_teams.to_a
        lhidden_teams  = lb2.hidden_teams.to_a.reject{ |_| _.team.id == team.id } + team_lb.hidden_teams.to_a

        [lteams,lgeneral_teams,lstudent_teams,lhidden_teams].each do |ary|
          ary.sort_by! { |li| s = li.scores[-1]; s ? [s.score, -s.marked_at.seconds, -s.marked_at.nanos] : [0,0,0] }
          ary.reverse!
        end

        lb3 = Isuxportal::Proto::Resources::Leaderboard.new(
          teams: lteams,
          general_teams: lgeneral_teams,
          student_teams: lstudent_teams,
          contest: lb2.contest,
          generated_at: team_lb.generated_at,
        )

        resp = Isuxportal::Proto::Services::Contestant::DashboardResponse.encode(Isuxportal::Proto::Services::Contestant::DashboardResponse.new(leaderboard: lb3))
        k = "dashboard:#{final}:contestant:team-#{team.id}"
        Rails.cache.write(k, resp)
        Rails.cache.write("dashboard:#{final}:contestant-ptr:team-#{team.id}", k)
      end

      admin_lb = Contest.leaderboard(admin: true, team: nil, progresses: false)
      Rails.cache.write("leaderboard:#{final}:admin", admin_lb.class.encode(admin_lb))
    else
      Team.active.each_with_index do |team,i|
        Rails.cache.write("dashboard:#{final}:contestant-ptr:team-#{team.id}", "dashboard:#{final}:contestant:public")
      end
      Rails.cache.write("leaderboard:#{final}:admin", lb_wire)
    end
  end
end
