module Contest
  class RegistrationClosed < StandardError; end

  def self.registration_started?(now=Time.zone.now)
    open = Rails.application.config.x.contest.registration_open
    open ? now >= open : true
  end

  def self.registration_open?(now=Time.zone.now)
    open = Rails.application.config.x.contest.registration_open
    close = Rails.application.config.x.contest.registration_close
    if open && close
      (open...close).cover?(now)
    else
      true
    end
  end

  def self.max_teams_reached?
    team_count >= max_teams
  end

  def self.team_count
    Team.count
  end

  def self.max_teams
    Rails.application.config.x.contest.max_teams || 0
  end
end
