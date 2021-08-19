require 'digest/sha2'
require 'isuxportal/resources/leaderboard_pb'
require 'isuxportal/services/contestant/dashboard_pb'
require 'isuxportal/services/audience/dashboard_pb'

class UpdateContestantDashboardJob < ApplicationJob
  def perform(team: nil, frozen: false)
    round = Rails.application.config.x.contest.final ? "final" : "qualify"

    Rails.logger.info("leaderboard")
    lb = Contest.leaderboard(admin: false, team: nil, progresses: false)
    Rails.logger.info("leaderboard done")
    lb_wire = lb.class.encode(lb)
    Rails.logger.info("leaderboard encode")


    audience_lb_resp = Isuxportal::Proto::Services::Audience::DashboardResponse.encode(Isuxportal::Proto::Services::Audience::DashboardResponse.new(leaderboard: lb))
    Rails.cache.write("dashboard:#{round}:audience:public-summed", [Digest::SHA384.digest(audience_lb_resp), audience_lb_resp])

    if frozen
      admin_lb = Contest.leaderboard(admin: true, team: nil, progresses: false)
      Rails.cache.write("leaderboard:#{round}:admin", admin_lb.class.encode(admin_lb))
    else
      Rails.cache.write("leaderboard:#{round}:admin", lb_wire)
    end

    (team ? [team] : Team.active).each_with_index do |t,i|
      resp = Isuxportal::Proto::Services::Contestant::DashboardResponse.new(
        leaderboard: Contest.leaderboard(admin: false, team: t, solo: true),
      )
      wire = resp.class.encode(resp)
      Rails.cache.write("dashboard:#{round}:contestant-solo:team-#{t.id}", [Digest::SHA384.digest(wire), wire])
    end
  end
end
