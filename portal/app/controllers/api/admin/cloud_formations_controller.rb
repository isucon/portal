require 'isuxportal/services/admin/cloud_formation_pb'

class Api::Admin::CloudFormationsController < Api::Admin::ApplicationController
  pb :show, Isuxportal::Proto::Services::Admin::GetCloudFormationQuery
  def show
    team = Team.find(params[:id])
    raise ActiveRecord::RecordNotFound if team.nil?

    template = case params[:type]
    when "test"
      CloudFormation.test_template(team)
    when "qualify"
      CloudFormation.qualify_template(team)
    else
      raise "Unexpected type: #{params[:type]}"
    end

    render protobuf: Isuxportal::Proto::Services::Admin::GetCloudFormationResponse.new(
      template: template,
    )
  end
end
