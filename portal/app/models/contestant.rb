require 'isuxportal/resources/contestant_pb'

class Contestant < ApplicationRecord
  belongs_to :team
  has_many :ssh_public_keys, dependent: :delete_all
  has_many :notifications, dependent: :delete_all
  has_many :push_subscriptions, dependent: :delete_all

  validates :name, presence: true
  validates :github_id, presence: true, uniqueness: true
  validates :github_login, presence: true
  validates :discord_id, presence: true, uniqueness: true
  validates :discord_tag, presence: true
  validates :avatar_url, presence: true

  validate :validate_number_of_team_members

  scope :active, -> { eager_load(:team).joins(:team).where(teams: {withdrawn: false, disqualified: false}) }

  after_save :save_team_student_status

  def active?
    team.active?
  end

  def promoted?
    team.promoted?
  end

  def leader?
    team.leader_id == id
  end

  def validate_number_of_team_members
    return if persisted?
    unless team&.joinable?
      errors.add :team_id, 'チームメンバーの上限に達しています'
    end
  end

  def to_pb(detail: false)
    Isuxportal::Proto::Resources::Contestant.new(
      id: id,
      team_id: team_id,
      name: name,
      contestant_detail: !detail ? nil : Isuxportal::Proto::Resources::Contestant::ContestantDetail.new(
        avatar_url: avatar_url,
        github_login: github_login,
        github_id: github_id,
        discord_tag: discord_tag,
        discord_id: discord_id,
        is_student: student,
      ),
    )
  end

  def save_team_student_status
    if student
      team.update_student_status
      team.save!
    else
      team.update_attributes!(student: false)
    end
  end
end
