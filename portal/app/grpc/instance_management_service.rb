require 'isuxportal/services/dcim/instance_management_pb'
require 'isuxportal/services/dcim/instance_management_services_pb'

class InstanceManagementService < Isuxportal::Proto::Services::Dcim::InstanceManagement::Service
  def inform_instance_state_update(req, _call)
    raise GRPC::Unauthenticated unless Rack::Utils.secure_compare(Rails.application.config.x.dcim.token, req.token)

    instance = ContestantInstance.find_or_initialize_by(cloud_id: req.instance.cloud_id)
    instance.update_attributes!(
      number: req.instance.number,
      team_id: req.instance.team_id,
      private_ipv4_address: req.instance.private_ipv4_address,
      public_ipv4_address: req.instance.public_ipv4_address,
      status: req.instance.status.to_s.downcase.to_sym,
    )

    Isuxportal::Proto::Services::Dcim::InformInstanceStateUpdateResponse.new()
  rescue ActiveRecord::RecordInvalid => e
    raise GRPC::InvalidArgument.new(e.message)
  end
end
