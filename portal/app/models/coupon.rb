require 'isuxportal/resources/coupon_pb'

class Coupon < ApplicationRecord
  belongs_to :team

  def to_pb()
    Isuxportal::Proto::Resources::Coupon.new(
      id: id,
      code: activate ? code : '',
      activate: activate
    )
  end
end
