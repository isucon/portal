require 'isuxportal/services/contestant/clarifications_pb'

class Api::Contestant::ClarificationsController < Api::Contestant::ApplicationController
  pb :index, Isuxportal::Proto::Services::Contestant::ListClarificationsQuery
  def index
    @clarifications = Clarification.includes(:team).visible_for_team(current_team).order(created_at: :desc)

    render protobuf: Isuxportal::Proto::Services::Contestant::ListClarificationsResponse.new(
      clarifications: @clarifications.map do |clarification|
        clarification.to_pb(team: true, original_question: !clarification.admin? && clarification.team_id == current_team.id)
      end,
    )
  end

  pb :create, Isuxportal::Proto::Services::Contestant::RequestClarificationRequest
  def create
    @clarification = Clarification.create!(
      team: current_team,
      original_question: pb.question,
      question: pb.question,
    )
    ClarificationAcceptanceJob.perform_later(@clarification)
    render protobuf: Isuxportal::Proto::Services::Contestant::RequestClarificationResponse.new(
      clarification: @clarification.to_pb(team: true, original_question: true),
    )
  end
end
