class ApplicationController < ActionController::Base
  before_action :require_staff_when_always_required

  helper_method def current_contestant
    @current_contestant ||= session[:contestant_id]&.yield_self { |id| Contestant.active.find_by(id: id) }
  end

  helper_method def current_team
    current_contestant&.team
  end

  helper_method def current_bypass_token
    @bypass_token = session[:bypass_token]&.yield_self { |_| BypassToken.verify(_) }.tap do |_|
      session[:bypass_token] = nil unless _
    end
  end

  helper_method def current_bypass_allowed?(usage)
    current_bypass_token&.usages&.include?(usage)
  end

  helper_method def github_login
    session[:github_login]
  end

  helper_method def discord_login
    session[:discord_login]
  end

  private def require_staff
    if !session[:staff]
      return redirect_to new_admin_session_path(back_to: url_for(params.to_unsafe_h.merge(only_path: true)))
    end
  end

  private def require_staff_when_always_required
    require_staff if Rails.application.config.x.admin_auth.always_required
  end

  private def require_contestant
    if !current_contestant && !github_login
      return redirect_to new_github_session_path(back_to: url_for(params.to_unsafe_h.merge(only_path: true)))
    end
  end

  private def require_promoted_contestant
    if !current_team || !current_team.promoted?
      return render status: 403, plain: 'Forbidden'
    end
  end
end
