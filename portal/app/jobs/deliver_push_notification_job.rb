class DeliverPushNotificationJob < ApplicationJob
  def perform(notification)
    Rails.logger.info "notification_id=#{notification.id} contestant_id=#{notification.contestant_id} notification=#{notification.inspect}"
    PushSubscription.where(contestant_id: notification.contestant_id).find_in_batches do |batch|
      batch.each do |subscription|
        do_push(notification, subscription)
      end
    end
  end

  def do_push(notification, subscription)
    Rails.logger.info "notification_id=#{notification.id} contestant_id=#{notification.contestant_id} subscription_id=#{subscription.id}"

    pb = notification.to_pb
    Webpush.payload_send(
      message: [pb.class.encode(pb)].pack("m0"),
      endpoint: subscription.endpoint,
      p256dh: subscription.p256dh,
      auth: subscription.auth,
      vapid: Rails.application.config.x.webpush.vapid_key&.yield_self do |key|
        key.to_h.merge(subject: Rails.application.config.x.webpush.subject)
      end,
    )
  rescue Webpush::ExpiredSubscription, Webpush::InvalidSubscription => e
    Rails.logger.warn "notification_id=#{notification.id} contestant_id=#{notification.contestant_id} subscription_id=#{subscription.id} #{e.inspect}"
    subscription.destroy
  end
end
