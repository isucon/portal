class ApplicationJob < ActiveJob::Base
  queue_as ENV['ISUXPORTAL_SHORYUKEN_QUEUE'] if ENV['ISUXPORTAL_SHORYUKEN_QUEUE']

  include Rails.application.routes.url_helpers

  def default_url_options
    {host: Rails.application.config.x.public_url_host, protocol: 'https'}
  end

  # Automatically retry jobs that encountered a deadlock
  # retry_on ActiveRecord::Deadlocked

  # Most jobs are safe to ignore if the underlying records are no longer available
  # discard_on ActiveJob::DeserializationError
end
