require 'isuxportal/services/registration/join_pb'

class Api::Registration::ContestantsController < Api::Registration::ApplicationController
  pb :create, Isuxportal::Proto::Services::Registration::JoinTeamRequest
  def create
    raise ActiveRecord::RecordNotFound if current_contestant
    raise ActiveRecord::RecordInvalid, "logins are missing" if !github_login || !discord_login
    @team = Team.find_by!(id: pb.team_id, invite_token: pb.invite_token)

    ApplicationRecord.transaction do
      @team.lock!
      @contestant = Contestant.create!(
        team: @team,
        name: pb.name,
        student: pb.is_student,
        avatar_url: github_login.fetch('avatar_url'),
        discord_id: discord_login.fetch('id'),
        discord_tag: discord_login.fetch('tag'),
        github_id: github_login.fetch('id'),
        github_login: github_login.fetch('login'),
      )
    end
    SyncSshKeysOfContestantJob.perform_later(@contestant, github_login.fetch('token'))

    session[:contestant_id] = @contestant.id
    render protobuf: Isuxportal::Proto::Services::Registration::JoinTeamResponse.new(
    )
  end
end