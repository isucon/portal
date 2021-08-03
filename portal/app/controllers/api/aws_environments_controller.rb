class Api::AwsEnvironmentsController < Api::ApplicationController
  skip_before_action :require_staff_when_always_required
  skip_before_action :verify_authenticity_token

  def create
    token = params[:token]
    return render status: :bad_request, body: "request not have token" unless token
    payload = CheckerToken.verify(token)
    return render status: :unauthorized, body: "invalid token" unless payload

    @aws_environment = AwsEnvironment.new(
      team_id: payload[:team_id],
      name: params[:name],
      ip_address: params[:ip_address],
      passed: params[:passed],
      message: params[:message],
      admin_message: params[:admin_message],
      raw_data: params[:raw_data],
    )
    @aws_environment.save!
  end
end
