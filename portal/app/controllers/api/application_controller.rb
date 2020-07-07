require 'isuxportal/error_pb'

class Api::ApplicationController < ApplicationController
  include ProtobufData

  rescue_from ActiveRecord::RecordInvalid do |err|
    render status: 422, protobuf: Isuxportal::Proto::Error.new(
      code: 422,
      name: "ActiveRecord::RecordInvalid",
      human_message: "Failed to save record",
      human_descriptions: err.record.errors.full_messages,
    )
  end

  rescue_from Contest::RegistrationClosed do |err|
    render status: 422, protobuf: Isuxportal::Proto::Error.new(
      code: 422,
      name: "Contest::RegistrationClosed",
      human_message: "Registration is closed",
      human_descriptions: ['Registration is closed', '参加登録を受け付けていません (定員、開始前、もしくは締切超過)'],
    )
  end
end
