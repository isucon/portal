require 'erb'

module CloudFormation
  TEST_ERB = ERB.new(File.read(File.join(File.dirname(__FILE__), './cf_templates/test.yaml.erb')))

  def self.template(erb, b)
    erb.result(b)
  end

  def self.test_template(team)
    zone_id = team.availability_zone
    token = CheckerToken.create(
      team_id: team.id,
      expiry: Rails.application.config.x.contest.contest_start.to_i,
    )

    unless zone_id.nil?
      template(TEST_ERB, binding)
    else
      ''
    end
  end
end
