class ApplicationController < ActionController::Base
  helper_method def current_contestant
    @current_contestant ||= session[:contestant_id]&.yield_self { |id| Contestant.find_by(id: id) }
  end
  
  helper_method def current_team
    current_contestant&.team
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
end
