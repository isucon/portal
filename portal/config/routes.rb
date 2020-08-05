require 'sidekiq/web'

Rails.application.routes.draw do
  get '/' => 'root#index'
  get '/terms', to: redirect('http://isucon.net/archives/54800315.html')
  get '/rules', to: redirect('http://isucon.net/archives/54753430.html')
  get '/site/sha' => RevisionPlate::App.new("#{__dir__}/../REVISION")


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
      # registration/session UpdateRegistration: PUT /api/registration
      # XXX:
      put '/' => 'sessions#update'

      # registration/session DeleteRegistration: PUT /api/registration
      delete  '/' => 'sessions#delete'

      # registration/session GetRegistrationSession: GET /api/registration/session
      resource :session, only: %i(show)
      # registration/create_team CreateTeam: POST /api/registration/team
      resource :team, only: %i(create)
      # registration/join JoinTeam: POST /api/registration/contestant
      resource :contestant, only: %i(create)
    end

    scope path: 'audience', module: 'audience' do
      # audience/team_list ListTeams: GET /api/audience/teams
      resources :teams, only: %i(index)
    end
  end

  scope path: 'admin', module: 'admin' do
    get '/' => 'root#index'
    get '/teams' => 'root#index'
    get '/teams/:id' => 'root#index'

    get 'impersonate' => 'impersonate#index', ad: :impersonate
    post 'impersonate/contestant' => 'impersonate#contestant'
    post 'impersonate/github' => 'impersonate#github'
    post 'impersonate/discord' => 'impersonate#discord'

    mount Sidekiq::Web => '/sidekiq', :constraints => Module.new {
      def self.matches?(request)
        request.session[:staff]
      end
    }

    resource :session, only: %i(new create), as: :admin_session
  end
end
