# frozen_string_literals: true
require 'isuxportal/error_pb'

Mime::Type.register 'application/vnd.google.protobuf', :protobuf
ActionController::Renderers.add :protobuf do |obj, options|
  #unless Rails.env.production?
    #response.headers['X-Pb-Inspect'] = obj.inspect
  #end
  if obj.is_a?(String)
    self.content_type =    "application/vnd.google.protobuf"
    response.charset = false
    obj
  else
    self.content_type =    "application/vnd.google.protobuf; proto=#{obj.class.descriptor.name}"
    response.charset = false
    obj.class.encode(obj)
  end
end
