require 'isuxportal/services/registration/session_pb'

class Api::Registration::SessionsController < Api::Registration::ApplicationController
  def show
    case
    when current_contestant
      @team = current_contestant.team
    when params[:team_id] && params[:invite_token]
      @team = Team.find_by(id: params[:team_id], invite_token: params[:invite_token])
      unless @team
        return render status: 404, protobuf: Isuxportal::Proto::Error.new(
          code: 404,
          name: "ActiveRecord::RecordNotFound",
          human_message: "Record not found",
          human_descriptions: ["招待URLが無効です"],
        )
      end
    end

    status = case
    when current_contestant
      Isuxportal::Proto::Services::Registration::GetRegistrationSessionResponse::Status::JOINED
    when @team && !@team.joinable?
      Isuxportal::Proto::Services::Registration::GetRegistrationSessionResponse::Status::NOT_JOINABLE
    when !@team && (!Contest.registration_open? || Contest.max_teams_reached?)
      Isuxportal::Proto::Services::Registration::GetRegistrationSessionResponse::Status::CLOSED
    when github_login.nil? || discord_login.nil?
      Isuxportal::Proto::Services::Registration::GetRegistrationSessionResponse::Status::NOT_LOGGED_IN
    when @team
      Isuxportal::Proto::Services::Registration::GetRegistrationSessionResponse::Status::JOINABLE
    when !@team
      Isuxportal::Proto::Services::Registration::GetRegistrationSessionResponse::Status::CREATABLE
    else
      raise "undeterminable status"
    end

    render protobuf: Isuxportal::Proto::Services::Registration::GetRegistrationSessionResponse.new(
      team: @team&.to_pb(detail: current_contestant&.id == current_team&.leader_id, member_detail: true, members: true),
      status: status,
      github_login: github_login&.fetch('login'),
      github_avatar_url: github_login&.fetch('avatar_url'),
      discord_tag: discord_login&.fetch('tag'),
      discord_avatar_url: discord_login&.fetch('avatar_url'),
      member_invite_url: @team && registration_url(team_id: @team.id, invite_token: @team.invite_token), # TODO:
      discord_server_id: status == Isuxportal::Proto::Services::Registration::GetRegistrationSessionResponse::Status::JOINED ? Rails.application.config.x.discord.server_id : "",
    )
  end

  pb :update, Isuxportal::Proto::Services::Registration::UpdateRegistrationRequest
  def update
    raise ActiveRecord::RecordNotFound unless current_contestant

    ApplicationRecord.transaction do
      current_contestant.update_attributes!(
        name: pb.name,
        student: pb.is_student,
      )
      if current_team.leader_id == current_contestant.id
        current_team.update_attributes!(
          name: pb.team_name,
          email_address: pb.email_address,
        )
      end
    end

    render protobuf: Isuxportal::Proto::Services::Registration::UpdateRegistrationResponse.new()
  end
end
