require 'isuxportal/misc/bypass_token_pb'

class Admin::BypassTokenController < Admin::ApplicationController
  def new
  end

  def create
    begin
      @token = BypassToken.create(Isuxportal::Proto::Misc::BypassTokenPayload.new(
        expiry: Time.now.to_i + params[:expires_in]&.to_i,
        usages: [*params[:usages]].map(&:to_s).map(&:to_sym),
      ))
    rescue RangeError # invalid enum
      return render plain: '400', status: 400
    end
    render :new
  end
end
