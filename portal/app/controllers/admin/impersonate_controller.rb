class Admin::ImpersonateController < Admin::ApplicationController
  def index
  end

  def contestant
    session[:contestant_id] = params[:id]
    redirect_to impersonate_path
  end

  def github
    session[:github_login] = {id: params[:id], login: params[:login], avatar_url: 'https://avatars2.githubusercontent.com/u/10137?s=400&u=b1951d34a583cf12ec0d3b0781ba19be97726318&v=4'}
    session.delete(:github_login) if params[:clear].present?
    redirect_to impersonate_path
  end

  def discord
    session[:discord_login] = {id: params[:id], tag: "#{params[:login]}#----", avatar_url: 'https://avatars2.githubusercontent.com/u/10137?s=400&u=b1951d34a583cf12ec0d3b0781ba19be97726318&v=4'}
    session.delete(:discord_login) if params[:clear].present?
    redirect_to impersonate_path
  end
end
