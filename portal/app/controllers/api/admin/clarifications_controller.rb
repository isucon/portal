require 'isuxportal/services/admin/clarifications_pb'

class Api::Admin::ClarificationsController < Api::Admin::ApplicationController
  pb :index, Isuxportal::Proto::Services::Admin::ListClarificationsQuery
  def index
    @clarifications = Clarification.includes(:team).order(id: :desc)
    @clarifications = @clarifications.where(team_id: params[:team_id]) if params[:team_id].present?
    @clarifications = @clarifications.unanswered if params[:unanswered_only] == '1'

    render protobuf: Isuxportal::Proto::Services::Admin::ListClarificationsResponse.new(
      clarifications: @clarifications.map do |clarification|
        clarification.to_pb(team: true, original_question: true)
      end,
    )
  end

  pb :show, Isuxportal::Proto::Services::Admin::GetClarificationQuery
  def show
    @clarification = Clarification.find(params[:id])

    render protobuf: Isuxportal::Proto::Services::Admin::GetClarificationResponse.new(
      clarification: @clarification.to_pb(team: true, original_question: true),
    )
  end

  pb :create, Isuxportal::Proto::Services::Admin::CreateClarificationRequest
  def create
    @clarification = Clarification.create!(
      team: pb.team_id != 0 ? Team.find(pb.team_id) : nil,
      original_question: pb.question,
      question: pb.question,
      answer: pb.answer,
      answered_at: Time.zone.now,
      disclosed: pb.team_id == 0,
      admin: true,
    )
    ClarificationResponseJob.perform_later(@clarification, false)
    render protobuf: Isuxportal::Proto::Services::Admin::CreateClarificationResponse.new(
      clarification: @clarification.to_pb(team: true, original_question: true),
    )
  end

  pb :update, Isuxportal::Proto::Services::Admin::RespondClarificationRequest
  def update
    raise Api::ApplicationController::Error::BadRequest.new("id must match") if params[:id]&.to_i != pb.id
    @clarification = Clarification.find(params[:id])
    was_answered = @clarification.answered?
    was_disclosed = @clarification.disclosed?
    @clarification.answered = true
    @clarification.update_attributes!(
      disclosed: pb.disclose,
      answer: pb.answer,
      question: pb.question.presence || @clarification.original_question,
    )
    ClarificationResponseJob.perform_later(@clarification, was_answered && was_disclosed == @clarification.disclosed)
    render protobuf: Isuxportal::Proto::Services::Admin::RespondClarificationResponse.new(
      clarification: @clarification.to_pb(team: true, original_question: true),
    )
  end
end
