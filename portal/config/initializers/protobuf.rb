# frozen_string_literals: true
require 'isuxportal/error_pb'

# https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html#compressed-content-cloudfront-file-types
Mime::Type.register 'application/protobuf', :protobuf
ActionController::Renderers.add :protobuf do |obj, options|
  #unless Rails.env.production?
    #response.headers['X-Pb-Inspect'] = obj.inspect
  #end
  if obj.is_a?(String)
    self.content_type =    "application/protobuf"
    response.charset = false
    obj
  else
    self.content_type =    "application/protobuf; proto=#{obj.class.descriptor.name}"
    response.charset = false
    obj.class.encode(obj)
  end
end
