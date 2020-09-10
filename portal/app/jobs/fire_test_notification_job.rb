require 'isuxportal/resources/notification_pb'

class FireTestNotificationJob < ApplicationJob
  def perform(contestant)
    Notification.create!(
      contestant: contestant,
      message: Isuxportal::Proto::Resources::Notification.new(
        content_test: {something: rand(100)},
      ),
    )
  end
end
