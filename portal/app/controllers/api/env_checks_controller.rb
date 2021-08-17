class Api::EnvChecksController < Api::ApplicationController
  skip_before_action :require_staff_when_always_required
  skip_before_action :verify_authenticity_token
  before_action :require_valid_checker_token

  TEST_AMI_ID = "ami-0e22b2e5f011bcb69"
  QUALIFY_AMI_ID = ""

  def create
    team_id = @payload[:team_id]
    name = params[:name]
    public_ip_address = params[:ip_address]
    @env_check = EnvCheck.new(
      team_id: team_id,
      name: name,
      ip_address: public_ip_address,
      passed: params[:passed],
      message: params[:message],
      admin_message: params[:admin_message],
      raw_data: params[:raw_data],
    )
    @env_check.save!

    if name.starts_with("qualify")
      nameNum = name.delete_prefix("qualify").to_i

      instance = ContestantInstance.find_or_initialize_by(
        team_id: team_id,
        number: nameNum,
      )
      instance.update_attributes!(
        cloud_id: "qualify-#{team_id}-#{nameNum}", # dummy
        status: Isuxportal::Proto::Resources::ContestantInstance::Status::RUNNING,
        private_ipv4_address: "192.168.0.1#{nameNum}",
        public_ipv4_address: public_ip_address,
      )
    end
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

  def ssh_public_keys
    team_id = @payload[:team_id]

    result = []
    SshPublicKey.order(contestant_id: :asc, id: :asc).includes(:contestant).where(contestant: Contestant.where(team_id: team_id)).each do |key|
      result << "#{key.public_key} #{key.contestant.id}@#{key.contestant.github_login}"
    end
    render plain: "#{result.join(?\n)}\n"
  end

  private def require_valid_checker_token
    token = params[:token]
    return render status: :bad_request, body: "request not have token" unless token
    @payload = CheckerToken.verify(token)
    return render status: :unauthorized, body: "invalid token" unless @payload
  end
end
