require 'isuxportal/resources/team_pb'

class Team < ApplicationRecord
  has_many :members, class_name: 'Contestant'
  has_one :leader, class_name: 'Contestant'

  validates :name, presence: true, uniqueness: true
  validates :email_address, presence: true
  validates :invite_token, presence: true

  before_validation :generate_invite_token

  def joinable?
    members.count < 3
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
      detail: !detail ? nil : Isuxportal::Proto::Resources::Team::TeamDetail.new(
        email_address: email_address,
        benchmark_target_id: 0, # TODO:
        invite_token: invite_token,
      ),
      leader: members ? leader&.to_pb(detail: member_detail) : nil,
      members: members ? self.members&.map { |_| _.to_pb(detail: member_detail) } : nil,
    )
  end
end
