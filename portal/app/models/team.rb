class Team < ApplicationRecord
  has_many :members, class_name: 'Contestant'
  has_one :leader, class_name: 'Contestant'

  validate :invite_token, presence: true

  before_validation :generate_invite_token

  def generate_invite_token
    self.invite_token ||= SecureRandom.urlsafe_base64(64)
  end
end
