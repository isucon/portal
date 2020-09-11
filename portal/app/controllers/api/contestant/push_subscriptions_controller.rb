require 'isuxportal/services/contestant/notifications_pb'

class Api::Contestant::PushSubscriptionsController < Api::Contestant::ApplicationController
  pb :create, Isuxportal::Proto::Services::Contestant::SubscribeNotificationRequest
  def create
    p pb
    PushSubscription.create!(
      contestant: current_contestant,
      endpoint: pb.endpoint,
      p256dh: pb.p256dh,
      auth: pb.auth,
    )

    render protobuf: Isuxportal::Proto::Services::Contestant::SubscribeNotificationResponse.new()
  end

  pb :destroy, Isuxportal::Proto::Services::Contestant::UnsubscribeNotificationRequest
  def destroy
    PushSubscription.where(
      contestant: current_contestant,
      endpoint: pb.endpoint,
    ).first&.destroy!

    render protobuf: Isuxportal::Proto::Services::Contestant::UnsubscribeNotificationResponse.new()
  end
end
