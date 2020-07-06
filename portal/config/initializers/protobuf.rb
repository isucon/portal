require 'isuxportal/error_pb'

Mime::Type.register "application/vnd.google.protobuf", :protobuf
ActionController::Renderers.add :protobuf do |obj, options|
  unless Rails.env.production?
    response.headers['X-Pb-Inspect'] = obj.inspect
  end
  send_data obj.class.encode(obj), type: "application/vnd.google.protobuf; proto=#{obj.class.descriptor.name}"
end
