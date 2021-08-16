require 'isuxportal/services/contestant/cloud_formation_pb'

class Api::Contestant::CloudFormationsController < Api::Contestant::ApplicationController
  pb :show, Isuxportal::Proto::Services::Contestant::GetCloudFormationQuery
  def show
    raise ActiveRecord::RecordNotFound, "no cloudformation template for final" if Rails.application.config.x.contest.final

    template = CloudFormation.qualify_template(current_team)

    render protobuf: Isuxportal::Proto::Services::Contestant::GetCloudFormationResponse.new(
      template: template,
    )
  end
end
