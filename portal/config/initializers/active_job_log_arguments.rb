# https://github.com/rails/rails/pull/37660/files
class ActiveJob::Base
  class_attribute :log_arguments, instance_accessor: false, default: true
end

module ActiveJob
  module Logging
    class LogSubscriber
      def args_info(job)
        if job.arguments.any?
          if job.class.log_arguments? && job.arguments.any?
            " with arguments: " +
              job.arguments.map { |arg|  format(arg).inspect }.join(", ")
          else
            ""
          end
        else
          ""
        end
      end
    end
  end
end
