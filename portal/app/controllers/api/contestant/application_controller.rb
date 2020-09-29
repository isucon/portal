class Api::Contestant::ApplicationController < Api::ApplicationController
  before_action :require_contestant
  before_action :require_promoted_contestant
  before_action :require_contest_started

  private def require_contest_started
    if !Contest.contest_end? && !Contest.contest_running?
      raise Api::ApplicationController::Error::NotFound.new("not yet started")
    end
  end
end
