require 'erb'
require 'base64'

module CloudFormation
  TEST_ERB = ERB.new(File.read(File.join(File.dirname(__FILE__), './cf_templates/test.yaml.erb')))

  def self.template(erb, b)
    erb.result(b)
  end

  def self.test_template(team)
    zone_id = team.availability_zone
    portal_credentials = create_portal_credentials(
      team,
      Rails.application.config.x.contest.contest_start.to_i
    )
    ssh_keys = create_ssh_keys(team)

    unless zone_id.nil?
      template(TEST_ERB, binding)
    else
      raise "Availability Zone should be set to team"
    end
  end

  def self.create_portal_credentials(team, expiry)
    token = CheckerToken.create(
      team_id: team.id,
      expiry: expiry,
    )
    Base64.strict_encode64("{\"token\": \"#{token}\"}")
  end

  def self.create_ssh_keys(team)
    result = []
    SshPublicKey.order(contestant_id: :asc, id: :asc).includes(:contestant).where(contestant: Contestant.where(team: team)).each do |key|
      result << "#{key.public_key} #{key.contestant.id}@#{key.contestant.github_login}"
    end
    authorized_keys = "#{result.join(?\n)}\n"

    Base64.strict_encode64(authorized_keys)
  end
end
