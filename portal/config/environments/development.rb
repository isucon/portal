Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports.
  config.consider_all_requests_local = true

  # Enable/disable caching. By default caching is disabled.
  # Run rails dev:cache to toggle caching.
  if Rails.root.join('tmp', 'caching-dev.txt').exist?
    config.action_controller.perform_caching = true
    config.action_controller.enable_fragment_cache_logging = true

    config.cache_store = :memory_store
    config.public_file_server.headers = {
      'Cache-Control' => "public, max-age=#{2.days.to_i}"
    }
  else
    config.action_controller.perform_caching = false

    config.cache_store = :null_store
  end

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load

  # Highlight code that triggered database queries in logs.
  config.active_record.verbose_query_logs = true


  # Raises error for missing translations.
  # config.action_view.raise_on_missing_translations = true

  # Use an evented file watcher to asynchronously detect changes in source code,
  # routes, locales, etc. This feature depends on the listen gem.
  # config.file_watcher = ActiveSupport::EventedFileUpdateChecker
  config.x.slack.webhook_url = ENV['ISUXPORTAL_SLACK_WEBHOOK_URL']

  config.x.github.client_id = ENV['ISUXPORTAL_GITHUB_CLIENT_ID']
  config.x.github.client_secret = ENV['ISUXPORTAL_GITHUB_CLIENT_SECRET']

  config.x.discord.client_id = ENV['ISUXPORTAL_DISCORD_CLIENT_ID']
  config.x.discord.client_secret = ENV['ISUXPORTAL_DISCORD_CLIENT_SECRET']
  config.x.discord.bot_token = ENV['ISUXPORTAL_DISCORD_BOT_TOKEN']

  config.x.discord.server_id = ENV['ISUXPORTAL_DISCORD_SERVER_ID'] || '721578039779262486'
  config.x.discord.contestant_role_id = ENV['ISUXPORTAL_DISCORD_CONTESTANT_ROLE_ID'] || '721583193270255617'
  config.x.discord.contestant_final_role_id = ENV['ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE_ID'] || '721584047175761940'
  config.x.discord.contestant_final_role = ENV['ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE'] == '1'
  config.x.discord.contestant_qualify_role_id = ENV['ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE_ID'] || '721583975230865428'
  config.x.discord.contestant_qualify_role = ENV.fetch('ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE', '1') == '1'
  config.x.discord.support_comm_channel_roles = (ENV['ISUXPORTAL_DISCORD_SUPPORT_COMM_CHANNEL_ROLES'] || '729682389441445921=729679151396552704,729756952812322928=729755442951094312,729757140432060537=729755492351737857').split(?,).map{ |_| _.split(?=,2) }.to_h

  config.x.admin_auth.login = ENV['ISUXPORTAL_ADMIN_LOGIN']
  config.x.admin_auth.password = ENV['ISUXPORTAL_ADMIN_PASSWORD']

  config.x.contest.max_teams = 500
  config.x.contest.registration_open = ENV['ISUXPORTAL_TIMING_REGISTRATION_OPEN']&.yield_self { |_| Time.xmlschema(_) }
  config.x.contest.registration_close = ENV['ISUXPORTAL_TIMING_REGISTRATION_CLOSE']&.yield_self { |_| Time.xmlschema(_) }
end
