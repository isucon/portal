require 'isuxportal/services/registration/cloud_formation_pb'

class Api::Registration::TestCloudFormationsController < Api::Registration::ApplicationController
  def show
    raise ActiveRecord::RecordNotFound unless current_contestant

    template = CloudFormation.test_template(current_team.availability_zone)

    render protobuf: Isuxportal::Proto::Services::Registration::GetCloudFormationResponse.new(
      template: template,
    )
  end
end
