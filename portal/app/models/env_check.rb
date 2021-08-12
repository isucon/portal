require 'isuxportal/resources/notification_pb'

class EnvCheck < ApplicationRecord
  belongs_to :team

  validates :name, presence: true
  validates :team_id, presence: true
  validates :passed, inclusion: [true, false]
  validates :message, presence: true
  validates :raw_data, presence: true

  scope :of_team, ->(team) { where(team: team) }

  scope :test_boot, -> { where(name: 'test-boot') }
  scope :test_ssh_passed, -> { where(name: 'test-ssh', passed: true) }
end
