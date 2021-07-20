require 'isuxportal/services/registration/cloud_formation_pb'
require 'erb'

class Api::Registration::TestCloudFormationsController < Api::Registration::ApplicationController
  @@erb = ERB.new(File.read(File.join(File.dirname(__FILE__), '../../../cf_templates/test.yaml.erb')))

  def show
    raise ActiveRecord::RecordNotFound unless current_contestant

    zone_id = current_team.availability_zone
    template =
      unless zone_id.nil?
        @@erb.result(binding)
      else
        ''
      end

    render protobuf: Isuxportal::Proto::Services::Registration::GetCloudFormationResponse.new(
      template: template,
    )
  end
end
