require 'isuxportal/services/admin/leaderboard_dump_pb'

class Api::Admin::LeaderboardController < Api::Admin::ApplicationController
  pb :dump, Isuxportal::Proto::Services::Admin::GetLeaderboardDumpQuery
  def dump
    whenParam = params[:when]
    raise Api::ApplicationController::Error::BadRequest if whenParam.blank?

    time = case whenParam
      when "qualify-end"
        Rails.application.config.x.contest.contest_end
      else
        begin
          Time.xmlschema(whenParam)
        rescue ArgumentError
          raise Api::ApplicationController::Error::BadRequest
        end
      end

    render protobuf: Isuxportal::Proto::Services::Admin::GetLeaderboardDumpResponse.new(
      items: generate_dump(time),
    )
  end

  private def generate_dump(time)
    lb = Contest.leaderboard(admin: true, team: nil, progresses: false, solo: false, now: time)

    targets = {}
    lb.teams.each do |item|
      job = BenchmarkJob.where(team_id: item.team.id).order(id: :desc).limit(1).first
      next unless job
      targets[item.team.id] = job.target
    end

    lb.teams.map.with_index do |item,idx|
      Isuxportal::Proto::Services::Admin::GetLeaderboardDumpResponse::LeaderboardDumpItem.new(
        position: idx+1,
        team: item.team,
        best_score: item.best_score,
        latest_score: item.latest_score,
        target: targets[item.team.id]&.to_pb
      )
    end
  end
end
