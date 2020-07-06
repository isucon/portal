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
end
