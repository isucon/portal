class Api::Contestant::ApplicationController < Api::ApplicationController
  before_action :require_contestant
  before_action :require_promoted_contestant
  before_action :require_contest_started

  private def require_contest_started
    unless Contest.contest_open_for_team?(team: current_team)
      raise Api::ApplicationController::Error::NotFound.new("contest is not open")
    end
  end
end
