require 'isuxportal/resources/clarification_pb'

class Clarification < ApplicationRecord
  belongs_to :team, optional: true

  validates :question, presence: true
  validates :original_question, presence: true

  scope :answered, -> { where.not(answered_at: nil) }
  scope :disclosed, -> { answered.where(disclosed: true) }
  scope :answered_for_team, ->(team) { answered.where(team: team) }
  scope :visible_for_team, ->(team) { where(team: team).or(Clarification.disclosed) }

  scope :unanswered, -> { where(answered_at: nil) }
  scope :requested, -> { where(admin: false) }

  def answered?
    !!answered_at
  end
  alias answered answered?

  def answered=(x)
    if x
      self.answered_at ||= Time.zone.now
    else
      self.answered_at = false
    end
  end

  def to_pb(team: false, original_question: false)
    Isuxportal::Proto::Resources::Clarification.new(
      id: id,
      team_id: team_id,
      answered: answered?,
      disclosed: disclosed?,
      original_question: original_question ? self.original_question : "",
      question: question,
      answer: answer,
      created_at: created_at&.to_time,
      answered_at: answered_at&.to_time,
      team: team ? self.team&.to_pb : nil,
      admin: admin?,
    )
  end
end
