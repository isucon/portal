require 'isuxportal/resources/notification_pb'

class Notification < ApplicationRecord
  belongs_to :contestant
  validates :encoded_message, presence: true
  validate :validate_message_content_presence

  def message=(x)
    klass = Isuxportal::Proto::Resources::Notification
    raise TypeError, "message must be a #{klass}" unless x.is_a?(klass)
    self.encoded_message = [klass.encode(x)].pack('m0')
    @message = x
  end

  def message
    @message ||= self.encoded_message&.yield_self { |_| Isuxportal::Proto::Resources::Notification.decode(_.unpack1('m0')) }
  end

  def to_pb
    message&.tap do |m|
      m.id = self.id
      m.created_at = self.created_at&.to_time
    end
  end

  private def validate_message_content_presence
    if !message || (!message.content_benchmark_job && !message.content_clarification && !message.content_test)
      errors.add :encoded_message, "must have content"
    end
  end
end
