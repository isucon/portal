class SessionsController < ApplicationController
  def destroy
    session.delete(:contestant_id)
    session.delete(:staff)
    session.delete(:github_login)
    session.delete(:discord_login)
    redirect_to '/'
  end

  private def new(provider:)
    # avoid showing github ogp when pasting a link in Discord
    if request.env['HTTP_USER_AGENT']&.match?(/Discordbot|Slackbot/i) && !params[:beepbeep]
      return render plain: 'Beep beep, boop beep?', status: 404
    end

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
    contestant = Contestant.include_disqualified.find_by(github_id: auth['uid'])

    case
    when contestant&.disqualified?
      session[:contestant_id] = contestant.id
      redirect_to session[:back_to] || registration_path
    when contestant
      contestant.update_attributes!(
        github_login: auth['info']['nickname'],
      )
      session[:contestant_id] = contestant.id
      SyncSshKeysOfContestantJob.perform_later(contestant, auth['credentials']['token'])
      SyncDiscordMemberStateOfContestantJob.perform_later(contestant)
      redirect_to session[:back_to] || (Contest.contest_running? ? '/contestant' : '/')
    else
      redirect_to session[:back_to] || registration_path
    end
  end

  def discord_callback
    auth = request.env['omniauth.auth']

    tag = "#{auth['extra']['raw_info']['username']}##{auth['extra']['raw_info']['discriminator']}"
    session[:discord_login] = {id: auth['uid'], tag: tag, token: auth['credentials']['token'], avatar_url: auth['info']['image']}
    contestant = Contestant.include_disqualified.find_by(discord_id: auth['uid'])

    case
    when contestant&.disqualified?
      session[:contestant_id] = contestant.id
      redirect_to session[:back_to] || registration_path
    when contestant # 紐づくdiscordアカウントが既に存在していたらそのアカウントに切り替える
      contestant.update_attributes!(
        discord_tag: tag,
      )
      session[:contestant_id] = contestant.id
      redirect_to session[:back_to] || (Contest.contest_running? ? '/contestant' : '/')
    when session[:contestant_id] # ログイン済みの場合は紐づいているdiscordアカウントを変更する
      contestant = Contestant.active.find_by(id: session[:contestant_id])
      unless contestant
        redirect_to session[:back_to] || registration_path
      end

      newId = auth['uid']

      SlackWebhookJob.perform_later(text: ":left_right_arrow: *Switch discord account:* contestant=#{contestant.id} from=#{contestant.discord_tag}(#{contestant.discord_id}) to=#{tag}(#{newId})")
      Rails.logger.info "switch_discord_account: contestant=#{contestant.id} from=#{contestant.discord_tag}(#{contestant.discord_id}) to=#{tag}(#{newId})"
      MaintainDiscordContestantRolesJob.perform_later(nil, force_discord_id: contestant.discord_id)
      SyncDiscordMemberStateOfContestantJob.perform_later(contestant)

      contestant.update_attributes!(
        discord_id: newId,
        discord_tag: tag,
      )
      redirect_to session[:back_to] || (Contest.contest_running? ? '/contestant' : '/')
    else
      redirect_to session[:back_to] || registration_path
    end
  end

  def assume_bypass_token
    if BypassToken.verify(params[:token])
      session[:bypass_token] = params[:token]

      if params[:back_to]
        uri = Addressable::URI.parse(params[:back_to])
        if uri && uri.host.nil? && uri.scheme.nil? && uri.path.start_with?('/')
          return redirect_to uri.to_s
        end
      else
        return redirect_to '/'
      end
    else
      session[:bypass_token] = nil
      return render status: 404, plain: 'no'
    end
  end
end
