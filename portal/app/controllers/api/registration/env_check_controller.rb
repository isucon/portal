require 'isuxportal/resources/env_check_status_pb'
require 'isuxportal/services/registration/env_check_pb'

class Api::Registration::EnvCheckController < Api::Registration::ApplicationController
  def show
    raise ActiveRecord::RecordNotFound unless current_contestant

    template = CloudFormation.test_template(current_team.availability_zone)
    instance_ip = "0.0.0.0"
    ssh_done = false

    status = if instance_ip.nil?
        Isuxportal::Proto::Resources::EnvCheckStatus::CREATED_INSTANCE
      elsif ssh_done
        Isuxportal::Proto::Resources::EnvCheckStatus::DONE
      else
        Isuxportal::Proto::Resources::EnvCheckStatus::NOT_STARTED
      end

    render protobuf: Isuxportal::Proto::Services::Registration::GetEnvCheckInformationResponse.new(
      template: template,
      status: status,
      instance_ip: instance_ip,
    )
  end
end
