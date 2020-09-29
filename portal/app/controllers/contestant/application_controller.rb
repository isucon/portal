class Contestant::ApplicationController < ApplicationController
  before_action :require_contestant
  before_action :require_promoted_contestant
  before_action :require_contest_started

  private def require_contest_started
    if !Contest.contest_end? && !Contest.contest_running?
      return render plain: 'not yet started', status: 404
    end
  end
end
