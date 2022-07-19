require 'digest/sha2'
require 'isuxportal/resources/leaderboard_pb'
require 'isuxportal/services/contestant/dashboard_pb'
require 'isuxportal/services/audience/dashboard_pb'
require 'isuxportal/services/admin/dashboard_pb'

class UpdateContestantDashboardJob < ApplicationJob
  def perform(team: nil, now: nil, frozen: Contest.contest_frozen?(now || Time.zone.now))
    round = Rails.application.config.x.contest.final ? "final" : "qualify"

    Rails.logger.info("leaderboard")
    lb = Contest.leaderboard(history: false, now: now)
    Rails.logger.info("leaderboard done")
    lb_wire = lb.class.encode(lb)
    Rails.logger.info("leaderboard encode")


    audience_lb_resp = Isuxportal::Proto::Services::Audience::DashboardResponse.encode(Isuxportal::Proto::Services::Audience::DashboardResponse.new(leaderboard: lb))
    Rails.cache.write("dashboard-v2:#{round}:audience", [Digest::SHA384.digest(audience_lb_resp), audience_lb_resp])

    if frozen
      begin
        admin_lb = Contest.leaderboard(admin: true, history: false, now: now)
        wire = admin_lb.class.encode(admin_lb)
        Rails.cache.write("leaderboard-v2:#{round}:admin", [Digest::SHA384.digest(wire), wire])
      end
    else
      Rails.cache.write("leaderboard-v2:#{round}:admin", [Digest::SHA384.digest(lb_wire), lb_wire])
    end

    (team ? [team] : Team.active.promoted.includes(:best_benchmark_result).includes(:best_benchmark_result_for_audience).includes(:best_benchmark_result_for_admin)).each_with_index do |t,i|
      item = Contest.leaderboard(audience: true, team: t, history: true, solo: true, solo_item: true, now: now)

      begin
        resp = Isuxportal::Proto::Services::Audience::SoloDashboardResponse.new(
          leaderboard_item: item,
        )
        wire = resp.class.encode(resp)
        Rails.cache.write("dashboard-v2:#{round}:audience:team-#{t.id}", [Digest::SHA384.digest(wire), wire])
      end

      begin
        resp = Isuxportal::Proto::Services::Contestant::DashboardResponse.new(
          leaderboard_item: frozen ? item : Contest.leaderboard(team: t, history: true, solo: true, solo_item: true, now: now),
        )
        wire = resp.class.encode(resp)
        Rails.cache.write("dashboard-v2:#{round}:contestant:team-#{t.id}", [Digest::SHA384.digest(wire), wire])
      end

      begin
        resp = Isuxportal::Proto::Services::Admin::SoloDashboardResponse.new(
          leaderboard_item: frozen ? item : Contest.leaderboard(admin: true, team: t, history: true, solo: true, solo_item: true, now: now),
        )
        wire = resp.class.encode(resp)
        Rails.cache.write("dashboard-v2:#{round}:admin:team-#{t.id}", [Digest::SHA384.digest(wire), wire])
      end

    end

    nil
  end
end
