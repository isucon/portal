require 'isuxportal/services/audience/team_list_pb'

class Api::Audience::TeamsController < Api::Audience::ApplicationController
  def index
    expires_in 1.minutes, public: true, 's-maxage' => '300'
    items = Team.visible.active.includes(:members).all.map do |team|
      Isuxportal::Proto::Services::Audience::ListTeamsResponse::TeamListItem.new(
        team_id: team.id,
        name: team.name,
        member_names: team.members.map(&:name),
        final_participation: team.final_participation,
        is_student: team.student?,
      )
    end
    render protobuf: Isuxportal::Proto::Services::Audience::ListTeamsResponse.new(
      teams: items,
    )
  end
end
