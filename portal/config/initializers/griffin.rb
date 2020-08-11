# frozen_string_literal: true

require 'grpc/health/checker'
require 'griffin/interceptors/server/filtered_payload_interceptor'
require 'griffin/interceptors/server/logging_interceptor'
require 'griffin/interceptors/server/x_request_id_interceptor'
require 'griffin/interceptors/server/raven_interceptor'
require 'griffin/interceptors/server/rails_exception_interceptor'
require 'griffin/interceptors/server/clear_connection_interceptor'

health_checker = Grpc::Health::Checker.new
health_checker.add_status(ENV['GRPC_APPLICATION_ID'], Grpc::Health::V1::HealthCheckResponse::ServingStatus::SERVING)

if Rails.env.development? && ARGV[0] && ARGV[0].include?('Griffin::Server')
  Rails.application.runner do
    # Send logs to stdout like `rails s`
    # https://guides.rubyonrails.org/initialization.html#rails-server-start
    console = ActiveSupport::Logger.new($stdout)
    console.formatter = Rails.logger.formatter
    console.level = Rails.logger.level
    Rails.logger.extend(ActiveSupport::Logger.broadcast(console))
  end
end

Griffin::Server.configure do |c|
  c.bind '0.0.0.0'

  c.services [
    health_checker,
    BenchmarkReportService,
    BenchmarkQueueService,
  ]

  c.interceptors [
    Griffin::Interceptors::Server::FilteredPayloadInterceptor.new(filter_parameters: Rails.configuration.filter_parameters),
    Griffin::Interceptors::Server::LoggingInterceptor.new,
    Griffin::Interceptors::Server::RailsExceptionInterceptor.new,
    Griffin::Interceptors::Server::ClearConnectionInterceptor.new,
    Griffin::Interceptors::Server::RavenInterceptor.new,
    Griffin::Interceptors::Server::XRequestIdInterceptor.new,
  ]

  c.workers 2
  # TODO: pool_size, connection_size

  c.logger Rails.logger
end
