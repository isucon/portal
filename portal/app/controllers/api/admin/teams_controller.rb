require 'isuxportal/services/admin/teams_pb'

class Api::Admin::TeamsController < Api::Admin::ApplicationController
  pb :index, Isuxportal::Proto::Services::Admin::ListTeamsQuery
  def index
    items = Team.includes(:members).all.map do |team|
      Isuxportal::Proto::Services::Admin::ListTeamsResponse::TeamListItem.new(
        team_id: team.id,
        name: team.name,
        member_names: team.members.map(&:name),
        final_participation: team.final_participation,
        hidden: team.is_hidden?,
        is_student: team.student?,
        withdrawn: team.withdrawn?,
        disqualified: team.disqualified?,
      )
    end
    render protobuf: Isuxportal::Proto::Services::Admin::ListTeamsResponse.new(
      teams: items,
    )
  end

  pb :show, Isuxportal::Proto::Services::Admin::GetTeamQuery
  def show
    team = Team.find(params[:id]) 
    render protobuf: Isuxportal::Proto::Services::Admin::GetTeamResponse.new(
      team: team.to_pb(detail: true, members: true, member_detail: true),
    )
  end

  pb :update, Isuxportal::Proto::Services::Admin::UpdateTeamRequest
  def update
    raise Api::ApplicationController::Error::BadRequest unless pb.team && pb.team.detail
    raise Api::ApplicationController::Error::BadRequest unless pb.contestants.all?(&:contestant_detail)
    raise Api::ApplicationController::Error::BadRequest if params[:id]&.to_i != pb.team.id

    ApplicationRecord.transaction do
      team = Team.find(params[:id]) 
      contestants = team.members.where(id: pb.contestants.map(&:id))
      raise Api::ApplicationController::Error::NotFound if contestants.size != pb.contestants.size

      team.update_attributes!(
        name: pb.team.name,
        leader_id: pb.team.leader_id,
        final_participation: pb.team.final_participation,
        is_hidden: pb.team.hidden,
        withdrawn: pb.team.withdrawn,
        disqualified: pb.team.disqualified,
        email_address: pb.team.detail.email_address,
      )

      contestants.each do |contestant|
        cpb = pb.contestants.find { |_| _.id == contestant.id }
        contestant.update_attributes!(
          name: cpb.name,
          student: cpb.contestant_detail.is_student,
          github_id: cpb.contestant_detail.github_id,
          github_login: cpb.contestant_detail.github_login,
          discord_id: cpb.contestant_detail.discord_id,
          discord_tag: cpb.contestant_detail.discord_tag,
        )
      end
    end

    Isuxportal::Proto::Services::Admin::UpdateTeamResponse.new()
  end
end
