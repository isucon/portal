require 'erb'
require 'base64'
require 'json'

module CloudFormation
  TEST_ERB = ERB.new(File.read(File.join(File.dirname(__FILE__), './cf_templates/test.yaml.erb')))

  def self.template(erb, b)
    erb.result(b)
  end

  def self.test_template(team)
    zone_id = team.availability_zone
    token = create_token(
      team,
      test_token_expiry
    )
    portal_credentials = create_portal_credentials(token)

    portal_host = "portal.isucon.net"
    portal_host = "portal-dev.isucon.net" if is_for_staging

    unless zone_id.nil?
      template(TEST_ERB, binding)
    else
      raise "Availability Zone should be set to team"
    end
  end

  def self.is_for_staging
    Rails.application.config.x.cloudformation_staging
  end

  def self.test_token_expiry
    if is_for_staging
      Time.now.to_i + 60 * 60 # 発行時から1時間後
    else
      Rails.application.config.x.contest.contest_start.to_i
    end
  end

  def self.create_token(team, expiry)
    CheckerToken.create(
      team_id: team.id,
      expiry: expiry,
    )
  end

  def self.create_portal_credentials(token)
    Base64.strict_encode64(JSON.dump(
      token: token,
      dev: is_for_staging,
    ))
  end
end
