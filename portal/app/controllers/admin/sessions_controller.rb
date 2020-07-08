class Admin::SessionsController < ApplicationController
  skip_before_action :require_staff_when_always_required

  def new
    if session[:staff] && params[:back_to].present?
      uri = Addressable::URI.parse(params[:back_to])
      if uri && uri.host.nil? && uri.scheme.nil? && uri.path.start_with?('/')
        return redirect_to params[:back_to]
      end
    end
  end

  def create
    login = Rails.application.config.x.admin_auth.login
    password = Rails.application.config.x.admin_auth.password
    if login && password
      session[:staff] = Rack::Utils.secure_compare(params[:login], login) \
        &&  Rack::Utils.secure_compare(params[:password], password)
    else
      session[:staff] = true
    end
    unless session[:staff]
      flash[:error] = "sorry"
      return redirect_to new_admin_session_path(back_to: params[:back_to])
    end

    if params[:back_to]
      uri = Addressable::URI.parse(params[:back_to])
      if uri && uri.host.nil? && uri.scheme.nil? && uri.path.start_with?('/')
        return redirect_to params[:back_to]
      end
    end
    redirect_to '/admin'
  end
end
