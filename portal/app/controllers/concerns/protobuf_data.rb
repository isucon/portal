module ProtobufData
  extend ActiveSupport::Concern
  class_methods do
    def pb(action, klass)
      pb_inputs[action.to_s] = klass
    end

    def pb_inputs
      @pb_inputs ||= {}
    end
  end

  def pb
    return @pb if defined? @pb
    klass = self.class.pb_inputs[action_name]
    return nil unless klass
    @pb = klass.decode(request.raw_post)
    Rails.logger.info "  Protobuf Data: #{@pb.inspect}"
    @pb
  end
end
