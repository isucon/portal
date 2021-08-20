class Api::EnvChecksController < Api::ApplicationController
  skip_before_action :require_staff_when_always_required
  skip_before_action :verify_authenticity_token
  before_action :require_valid_checker_token

  TEST_AMI_IDS = ["ami-0e22b2e5f011bcb69"]
  QUALIFY_AMI_IDS = ["ami-0be3f7cce0ddfa2a3"]

  def create
    team_id = @payload[:team_id]
    name = params[:name]
    public_ip_address = params[:ip_address]
    passed = params[:passed]
    previous_check = EnvCheck.where(team_id: team_id, name: name).last
    @env_check = EnvCheck.new(
      team_id: team_id,
      name: name,
      ip_address: public_ip_address,
      passed: passed,
      message: params[:message],
      admin_message: params[:admin_message],
      raw_data: params[:raw_data],
    )
    @env_check.save!

    if name.start_with?("qualify")
      if name != "qualify-unknown"
        nameNum = name.delete_prefix("qualify").to_i
        instance = ContestantInstance.find_or_initialize_by(
          team_id: team_id,
          number: nameNum,
        )

        if !instance.public_ipv4_address.nil? && instance.public_ipv4_address != public_ip_address
          SlackWebhookJob.perform_later(text: ":face_with_monocle: *Updated server IP:* <https://#{Rails.application.config.x.public_url_host}/admin/teams/#{team_id}|team_id=#{team_id}> name=#{name}")
        end

        unless Contest.contest_end?
          instance.update_attributes!(
            cloud_id: "qualify-#{team_id}-#{nameNum}", # dummy
            status: Isuxportal::Proto::Resources::ContestantInstance::Status::RUNNING,
            private_ipv4_address: "isucondition-#{nameNum}.t.isucon.dev",
            public_ipv4_address: public_ip_address,
          )
        end
      end

      if !passed && (previous_check.nil? || previous_check.passed || (previous_check.created_at+5.minute) < Time.now)
        SlackWebhookJob.perform_later(text: ":shocked_face_with_exploding_head: *Checker failed:* <https://#{Rails.application.config.x.public_url_host}/admin/teams/#{team_id}|team_id=#{team_id}> name=#{name}")
      end
    end
  end

  def info
    team = Team.find(@payload[:team_id])

    ami_ids = case params[:name]
      when "test-boot", "test-ssh"
        TEST_AMI_IDS
      when "qualify"
        QUALIFY_AMI_IDS
      else
        return render status: :bad_request, body: "unknown name param"
      end

    az_id = team.availability_zone

    render json: {
      ami_id: ami_ids.first || "",
      ami_ids: ami_ids,
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
