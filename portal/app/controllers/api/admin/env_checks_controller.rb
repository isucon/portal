require 'isuxportal/services/admin/env_checks_pb'

class Api::Admin::EnvChecksController < Api::Admin::ApplicationController
  pb :index, Isuxportal::Proto::Services::Admin::ListEnvChecksQuery
  def index
    @env_checks = EnvCheck.of_team(params[:team_id].to_i)

    render protobuf: Isuxportal::Proto::Services::Admin::ListEnvChecksResponse.new(
      env_checks: @env_checks.map(&:to_pb),
    )
  end
end
