class Contestant::ApplicationController < ApplicationController
  before_action :require_contestant
  before_action :require_promoted_contestant
  before_action :require_contest_started

  private def require_contest_started
    unless Contest.contest_open_for_team?(team: current_team)
      return render plain: 'contest is not open', status: 404
    end
  end
end
