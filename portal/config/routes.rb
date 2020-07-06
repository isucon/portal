Rails.application.routes.draw do
  get '/' => 'root#index'

  resource :session, only: %i(destroy) do
    get 'new/github' => 'sessions#github_new'
    get 'new/discord' => 'sessions#discord_new'
  end
  get '/auth/github/callback' => 'sessions#github_callback'
  get '/auth/discord/callback' => 'sessions#discord_callback'

  scope path: 'registration', module: 'registration' do
    get '/' => 'registration#index', as: 'registration'
    resource :team, only: %i(new create)
    resource :user, only: %i(new create)
  end

  scope path: 'api', module: 'api' do
    # common/me GetCurrentSession: Get /api/session
    resource :session, only: %i(show)

    scope path: 'registration', module: 'registration' do
      # registration/session GetRegistrationSession: GET /api/registration/session
      resource :session, only: %i(show)
      # registration/create_team CreateTeam: POST /api/registration/team
      resource :team, only: %i(create)
      # registration/join JoinTeam: POST /api/registration/contestant
      resource :contestant, only: %i(create)
    end
  end

  scope path: 'admin', module: 'admin' do
    get 'impersonate' => 'impersonate#index', ad: :impersonate
    post 'impersonate/contestant' => 'impersonate#contestant'
    post 'impersonate/github' => 'impersonate#github'
    post 'impersonate/discord' => 'impersonate#discord'

    resource :session, only: %i(new create), as: :admin_session
  end
end
