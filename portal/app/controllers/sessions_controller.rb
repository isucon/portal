class SessionsController < ApplicationController
  def destroy
    session.delete(:contestant_id)
    session.delete(:staff_id)
    session.delete(:github_login)
    session.delete(:discord_login)
    redirect_to '/'
  end

  private def new(provider:)
    session.delete(:back_to)
    if params[:back_to]
      uri = Addressable::URI.parse(params[:back_to])
      if uri && uri.host.nil? && uri.scheme.nil? && uri.path.start_with?('/')
        session[:back_to] = params[:back_to]
      end
    end
    redirect_to "/auth/#{provider}"
  end

  def github_new
    new(provider: 'github')
  end
  def discord_new
    new(provider: 'discord')
  end

  def github_callback
    auth = request.env['omniauth.auth']

    session[:github_login] = {id: auth['uid'], login: auth['info']['nickname'], token: auth['credentials']['token'], avatar_url: auth['info']['image']}
    contestant = Contestant.find_by(github_id: auth['uid'])

    case
    when contestant
      session[:contestant_id] = contestant.id
      SyncSshKeysOfContestantJob.perform_later(contestant, auth['credentials']['token'])
      redirect_to session[:back_to] || registration_path # TODO:
    else
      redirect_to session[:back_to] || registration_path
    end
  end

  def discord_callback
    auth = request.env['omniauth.auth']

    tag = "#{auth['extra']['raw_info']['username']}##{auth['extra']['raw_info']['discriminator']}"
    session[:discord_login] = {id: auth['uid'], tag: tag, token: auth['credentials']['token'], avatar_url: auth['info']['image']}
    contestant = Contestant.find_by(discord_id: auth['uid'])

    case
    when contestant
      session[:contestant_id] = contestant.id
      redirect_to session[:back_to] || registration_path # TODO:
    else
      redirect_to session[:back_to] || registration_path
    end
  end
end
