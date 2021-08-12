class Api::EnvChecksController < Api::ApplicationController
  skip_before_action :require_staff_when_always_required
  skip_before_action :verify_authenticity_token
  before_action :require_valid_checker_token

  TEST_AMI_ID = "ami-0e22b2e5f011bcb69"
  QUALIFY_AMI_ID = ""

  def create
    @env_check = EnvCheck.new(
      team_id: @payload[:team_id],
      name: params[:name],
      ip_address: params[:ip_address],
      passed: params[:passed],
      message: params[:message],
      admin_message: params[:admin_message],
      raw_data: params[:raw_data],
    )
    @env_check.save!
  end

  def info
    team = Team.find(@payload[:team_id])

    ami_id = case params[:name]
      when "test-boot", "test-ssh"
        TEST_AMI_ID
      when "qualify"
        QUALIFY_AMI_ID
      else
        return render status: :bad_request, body: "unknown name param"
      end

    az_id = team.availability_zone

    render json: {
      ami_id: ami_id,
      az_id: az_id,
    }
  end

  private def require_valid_checker_token
    token = params[:token]
    return render status: :bad_request, body: "request not have token" unless token
    @payload = CheckerToken.verify(token)
    return render status: :unauthorized, body: "invalid token" unless @payload
  end
end
