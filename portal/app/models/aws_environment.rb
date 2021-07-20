require 'isuxportal/resources/notification_pb'

class AwsEnvironment < ApplicationRecord
  belongs_to :team

  validates :ip_address, presence: true
  validates :name, presence: true
  validates :team_id, presence: true
  validates :passed, inclusion: [true, false]
  validates :message, presence: true
  validates :admin_message, presence: true
  validates :raw_data, presence: true

end
