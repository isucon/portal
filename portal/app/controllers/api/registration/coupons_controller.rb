require 'isuxportal/services/registration/activate_coupon_pb'

class Api::Registration::CouponsController < Api::Registration::ApplicationController
  pb :update, Isuxportal::Proto::Services::Registration::ActivateCouponRequest
  def update
    raise ActiveRecord::RecordNotFound unless current_team

    coupon = Coupon.find_by(team_id: current_team.id)
    coupon.update_attributes!(activate: true)

    Isuxportal::Proto::Services::Registration::ActivateCouponResponse.new()
  end
end
