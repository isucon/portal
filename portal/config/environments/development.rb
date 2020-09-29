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

  config.hosts << "portal-dev.x.isucon.dev"

  if ENV['ISUXPORTAL_DEV_REDIS'] == '1'
    config.cache_store = :redis_cache_store, { url: ENV.fetch('REDIS_URL') }
    config.session_store :redis_store, {
      servers: [
        {
          url: ENV.fetch('REDIS_URL'),
          serializer: JSON,
        },
      ],
      expire_after: 14.days,
      key: ENV.fetch('ISUXPORTAL_SESSION_COOKIE', 'isuxportaldev_sess'),
      same_site: ENV.fetch('ISUXPORTAL_SESSION_SAMESITE', :lax).to_sym,
      threadsafe: true,
      secure: ENV.fetch('ISUXPORTAL_SESSION_SECURE', '0') == '1',
    }
  end

  config.active_job.queue_adapter = ENV.fetch('DISABLE_SHORYUKEN', '1') == '1' ? :inline : :shoryuken

  if ENV["RAILS_LOG_TO_STDOUT"].present?
    logger           = ActiveSupport::Logger.new(STDOUT)
    logger.formatter = config.log_formatter
    config.logger    = ActiveSupport::TaggedLogging.new(logger)
  end


  # Raises error for missing translations.
  # config.action_view.raise_on_missing_translations = true

  config.x.public_url_host = ENV.fetch('DEFAULT_URL_HOST', 'localhost:3000')

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
  config.x.discord.channel_id = ENV['ISUXPORTAL_DISCORD_CHANNEL_ID'] || '729697803982602286'
  config.x.discord.contestant_role_id = ENV['ISUXPORTAL_DISCORD_CONTESTANT_ROLE_ID'] || '721583193270255617'
  config.x.discord.admin_role_id = ENV['ISUXPORTAL_DISCORD_ADMIN_ROLE_ID'] || '721583068724592640'
  config.x.discord.contestant_final_role_id = ENV['ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE_ID'] || '721584047175761940'
  config.x.discord.contestant_final_role = ENV['ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE'] == '1'
  config.x.discord.contestant_qualify_role_id = ENV['ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE_ID'] || '721583975230865428'
  config.x.discord.contestant_qualify_role = ENV.fetch('ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE', '1') == '1'
  config.x.discord.support_comm_channel_roles = (ENV['ISUXPORTAL_DISCORD_SUPPORT_COMM_CHANNEL_ROLES'] || '729682389441445921=729679151396552704,729756952812322928=729755442951094312,729757140432060537=729755492351737857').split(?,).map{ |_| _.split(?=,2) }.to_h

  config.x.admin_auth.always_required = ENV['ISUXPORTAL_ADMIN_ONLY'] == '1'
  config.x.admin_auth.login = ENV['ISUXPORTAL_ADMIN_LOGIN']
  config.x.admin_auth.password = ENV['ISUXPORTAL_ADMIN_PASSWORD']

  config.x.contest.max_teams = 500
  config.x.contest.final = ENV.fetch('ISUXPORTAL_FINAL', '0') == '1'
  config.x.contest.registration_open = ENV['ISUXPORTAL_TIMING_REGISTRATION_OPEN']&.yield_self { |_| Time.xmlschema(_) }
  config.x.contest.registration_close = ENV['ISUXPORTAL_TIMING_REGISTRATION_CLOSE']&.yield_self { |_| Time.xmlschema(_) }
  config.x.contest.registration_invitation_close = ENV['ISUXPORTAL_TIMING_REGISTRATION_INVITATION_CLOSE']&.yield_self { |_| Time.xmlschema(_) }
  config.x.contest.registration_update_close = ENV['ISUXPORTAL_TIMING_REGISTRATION_UPDATE_CLOSE']&.yield_self { |_| Time.xmlschema(_) }

  config.x.contest.contest_start = ENV['ISUXPORTAL_TIMING_CONTEST_START']&.yield_self { |_| Time.xmlschema(_) }
  config.x.contest.contest_freeze = ENV['ISUXPORTAL_TIMING_CONTEST_FREEZE']&.yield_self { |_| Time.xmlschema(_) }
  config.x.contest.contest_end = ENV['ISUXPORTAL_TIMING_CONTEST_END']&.yield_self { |_| Time.xmlschema(_) }

  config.x.bench_auth.token = ENV['ISUXPORTAL_BENCH_TOKEN'] || 'token'
  config.x.bypass_token.secret = (ENV['ISUXPORTAL_BYPASS_SECRET'] || '5AQQyz/7oFnJYrxnq/HiLKYmh7QrdIrpCDpKlfvkYAg=').unpack1('m0') #dummy
  config.x.ssh_key_api.secret = (ENV['ISUXPORTAL_SSH_KEY_API_SECRET'] || 'himitsudayo')
  config.x.dcim.token = (ENV['ISUXPORTAL_DCIM_TOKEN'] || 'himitsudayo')

  config.x.docs_url = ENV.fetch('ISUXPORTAL_DOCS_URL', 'https://www.google.com')

  config.x.webpush.vapid_key = ENV['ISUXPORTAL_VAPID_PRIVATE_KEY']&.yield_self { |_| Webpush::VapidKey.from_pem(JSON.parse(_)) }
  config.x.webpush.vapid_key_public = config.x.webpush.vapid_key&.public_key_for_push_header
  config.x.webpush.subject = ENV['ISUXPORTAL_VAPID_SUBJECT'] || 'isucon10@googlegroups.com'

  config.x.sentry.dsn = ENV['SENTRY_DSN']
end
