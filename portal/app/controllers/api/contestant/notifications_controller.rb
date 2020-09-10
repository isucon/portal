require 'isuxportal/services/contestant/notifications_pb'

class Api::Contestant::NotificationsController < Api::Contestant::ApplicationController
  pb :index, Isuxportal::Proto::Services::Contestant::ListNotificationsQuery
  def index
    after = params[:after].presence&.to_i

    resp = ApplicationRecord.transaction do
      notifications = if after
        Notification.where(contestant: current_contestant).where('id > ?', after).order(id: :asc)
      else
        Notification.where(contestant: current_contestant).where(read: false).order(id: :asc)
      end

      notifications_pb = notifications.map(&:to_pb)
      notifications.update_all(read: true)

      Isuxportal::Proto::Services::Contestant::ListNotificationsResponse.new(
        last_answered_clarification_id: Clarification.answered.visible_for_team(current_team).order(id: :desc).pluck(:id)&.first,
        notifications: notifications_pb,
      )
    end

    render protobuf:  resp
  end
end
