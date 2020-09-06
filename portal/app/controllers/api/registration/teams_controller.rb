require 'isuxportal/services/registration/create_team_pb'

class Api::Registration::TeamsController < Api::Registration::ApplicationController
  pb :create, Isuxportal::Proto::Services::Registration::CreateTeamRequest
  def create
    raise ActiveRecord::RecordNotFound, "already signed up" if current_contestant
    raise ActiveRecord::RecordNotFound, "logins are missing" if !github_login || !discord_login

    ApplicationRecord.transaction do
      if (!Contest.registration_open? || Contest.max_teams_reached?)  && !current_bypass_allowed?(:CREATE_TEAM)
        raise Contest::RegistrationClosed 
      end
      @team = Team.new(
        name: pb.team_name,
        email_address: pb.email_address,
      )
      @team.is_hidden = true if current_bypass_allowed?(:HIDDEN_TEAM)
      @contestant = Contestant.new(
        name: pb.name,
        student: pb.is_student,
        avatar_url: github_login.fetch('avatar_url'),
        discord_id: discord_login.fetch('id'),
        discord_tag: discord_login.fetch('tag'),
        github_id: github_login.fetch('id'),
        github_login: github_login.fetch('login'),
      )
      @team.save!
      @contestant.team = @team
      @contestant.save!
      @team.leader_id = @contestant.id
      @team.save!
    end

    SlackWebhookJob.perform_later(text: ":raising_hand: *New team:* #{@team.name} (#{@team.id}) leader=#{@contestant.name} (#{@contestant.id})")
    SyncSshKeysOfContestantJob.perform_later(@contestant, github_login.fetch('token'))
    session[:contestant_id] = @contestant.id

    render protobuf: Isuxportal::Proto::Services::Registration::CreateTeamResponse.new(
      team_id: @team.id,
    )
  end
end
