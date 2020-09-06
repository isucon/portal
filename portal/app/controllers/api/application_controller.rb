require 'isuxportal/error_pb'

class Api::ApplicationController < ApplicationController
  include ProtobufData

  module Error
    class NotFound < StandardError; end
    class BadRequest < StandardError; end
    class Forbidden < StandardError; end
  end

  rescue_from Error::NotFound do |err|
    render status: 404, protobuf: Isuxportal::Proto::Error.new(
      code: 404,
      name: err.class.name,
      human_message: err.message.presence || "Not found",
      human_descriptions: [],
    )
  end

  rescue_from Error::BadRequest do |err|
    render status: 400, protobuf: Isuxportal::Proto::Error.new(
      code: 400,
      name: err.class.name,
      human_message: err.message.presence || "Bad request",
      human_descriptions: [],
    )
  end

  rescue_from Error::Forbidden do |err|
    render status: 403, protobuf: Isuxportal::Proto::Error.new(
      code: 403,
      name: err.class.name,
      human_message: err.message.presence || "Forbidden",
      human_descriptions: [],
    )
  end

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
