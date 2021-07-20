class Api::AwsEnvironmentsController < Api::ApplicationController
  skip_before_action :require_staff_when_always_required
  skip_before_action :verify_authenticity_token

  def create
    # TODO: 認証

    @aws_environment = AwsEnvironment.new(
      team_id: params[:team_id].to_i,
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
