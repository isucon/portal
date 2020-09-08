require 'isuxportal/services/admin/contestant_instances_pb'

class Api::Admin::ContestantInstancesController < Api::Admin::ApplicationController
  pb :index, Isuxportal::Proto::Services::Admin::ListContestantInstancesQuery
  def index
    if params[:team_id].present?
      @contestant_instances = ContestantInstance.where(team_id: params[:team_id]&.to_i).order(number: :asc)
    else
      @contestant_instances = ContestantInstance.order(cloud_id: :asc)
    end

    @contestant_instances = @contestant_instances.includes(:team)

    render protobuf: Isuxportal::Proto::Services::Admin::ListContestantInstancesResponse.new(
      contestant_instances: @contestant_instances.map { |_| _.to_pb(team: true) },
    )
  end
end
