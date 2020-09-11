require 'isuxportal/resources/notification_pb'

class FireTestNotificationJob < ApplicationJob
  def perform(contestant)
    n = Notification.create!(
      contestant: contestant,
      message: Isuxportal::Proto::Resources::Notification.new(
        content_test: {something: rand(100)},
      ),
    )
    DeliverPushNotificationJob.perform_now(n)
  end
end
