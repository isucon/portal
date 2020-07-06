require 'isuxportal/error_pb'

class IsuxportalExceptionsApp
  def initialize(html)
    @html = html
  end

  def call(env)
    request = ActionDispatch::Request.new(env)
    accept_pb = begin
      request.formats[0]&.symbol == :protobuf
    rescue Mime::Type::InvalidMimeType
      false
    end
    if accept_pb
      status = request.path_info[1..-1].to_i
      name = Rack::Utils::HTTP_STATUS_CODES.fetch(status, Rack::Utils::HTTP_STATUS_CODES[500])
      pb = Isuxportal::Proto::Error.new(
        code: status,
        name: name,
        human_message: name,
        human_descriptions: [],
      )
      encoded_pb = Isuxportal::Proto::Error.encode(pb)
      puts $!.full_message
      pp caller
      [
        status,
        {
          'Content-Type' => "application/vnd.google.protobuf; proto=isuxportal.proto.Error",
          'Content-Length' => encoded_pb.bytesize.to_s,
        },
        [encoded_pb],
      ]
    else
      @html.call(env)
    end
  end
end

public_exceptions = ActionDispatch::PublicExceptions.new(Rails.public_path)
Rails.application.config.exceptions_app = IsuxportalExceptionsApp.new(public_exceptions)

Rails.application.config.debug_exception_response_format  = :api
class Hash
  def to_protobuf
    # DebugExceptions
    if size == 4 && key?(:status) && key?(:error) && key?(:exception) && key?(:traces)
      return to_protobuf_error
    end
    raise NoMethodError, self.inspect
  end

  def to_protobuf_error
    Isuxportal::Proto::Error.encode(Isuxportal::Proto::Error.new(
      code: fetch(:status),
      name: fetch(:error),
      human_message: fetch(:exception),
      human_descriptions: [fetch(:exception)],
      debug_info: Isuxportal::Proto::Error::DebugInfo.new(
        exception: fetch(:exception),
        trace: fetch(:traces).dig('Full Trace')&.map { |_| _[:trace]&.to_s },
        application_trace: fetch(:traces).dig('Application Trace')&.map { |_| _[:trace]&.to_s },
        framework_trace: fetch(:traces).dig('Framework Trace')&.map { |_| _[:trace]&.to_s },
      ),
    ))
  end
end
