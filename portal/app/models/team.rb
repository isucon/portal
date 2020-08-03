require 'isuxportal/resources/team_pb'

class Team < ApplicationRecord
  has_many :members, class_name: 'Contestant'
  has_one :leader, class_name: 'Contestant'

  validates :name, presence: true, uniqueness: true
  validates :email_address, presence: true
  validates :invite_token, presence: true

  validate :validate_leader_belongs_to_team

  before_validation :generate_invite_token

  scope :active, -> { where(withdrawn: false, disqualified: false) }

  def active?
    !withdrawn? && !disqualified?
  end

  def joinable?
    members.count < 3
  end

  def student?
    members.all?(&:student?)
  end

  def generate_invite_token
    self.invite_token ||= SecureRandom.urlsafe_base64(64)
  end

  def to_pb(detail: false, members: true, member_detail: false)
    Isuxportal::Proto::Resources::Team.new(
      id: id,
      name: name,
      leader_id: leader_id,
      member_ids: self.members.map(&:id),
      final_participation: final_participation,
      hidden: is_hidden,
      withdrawn: withdrawn,
      disqualified: disqualified?,
      detail: !detail ? nil : Isuxportal::Proto::Resources::Team::TeamDetail.new(
        email_address: email_address,
        invite_token: invite_token,
      ),
      leader: members ? leader&.to_pb(detail: member_detail) : nil,
      members: members ? self.members&.map { |_| _.to_pb(detail: member_detail) } : nil,
    )
  end

  private def validate_leader_belongs_to_team
    if leader && self.persisted? && leader.team_id != self.id
      errors.new :leader, "must belong to the team"
    end
  end
end
