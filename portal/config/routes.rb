Rails.application.routes.draw do
  get '/' => 'root#index'
  get '/teams' => 'root#index'
  get '/terms', to: redirect(Rails.application.config.x.terms_url)
  get '/rules', to: redirect(Rails.application.config.x.rules_url)

  get('/docs', to: redirect(Rails.application.config.x.docs_url), constraints: Module.new {
    def self.matches?(_request)
      Contest.contest_running?
    end
  })

  get '/broadcast_view/leaderboard' => 'broadcast_view#index'
  get '/broadcast_view/score_changes' => 'broadcast_view#index'
  get '/broadcast_view/clock' => 'broadcast_view#index'

  get '/site/sha' => RevisionPlate::App.new("#{__dir__}/../REVISION")


  resource :session, only: %i(destroy) do
    get 'new/github' => 'sessions#github_new'
    get 'new/discord' => 'sessions#discord_new'

    get 'bypass/:token' => 'sessions#assume_bypass_token', as: :assume_bypass_token
  end
  get '/auth/github/callback' => 'sessions#github_callback'
  get '/auth/discord/callback' => 'sessions#discord_callback'

  scope path: 'registration', module: 'registration' do
    get '/' => 'registration#index', as: 'registration'
    get '/env_check' => 'registration#index'

    resource :team, only: %i(new create)
    resource :user, only: %i(new create)
  end

  scope path: 'contestant', module: 'contestant' do
    get '/' => 'root#index'
    get '/benchmark_jobs' => 'root#index'
    get '/benchmark_jobs/:id' => 'root#index'
    get '/clarifications' => 'root#index'
    get '/contestant_instances' => 'root#index'
    get '/discord' => 'root#index'
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
      # registration/env_check GetEnvCheckInformation: GET /api/registration/env_check
      get 'env_check', to: 'env_check#show'
      # registration/activate_coupon ActivateCoupon: PUT /api/registration/coupon
      put 'coupon' => 'coupons#update'
    end

    scope path: 'audience', module: 'audience' do
      # audience/dashboard Dashboard: GET /api/audience/dashboard
      resource :dashboard, only: %i(show) do
        member do
          # audience/dashboard SoloDashboard: GET /api/audience/dashboard/teams/:id
          get 'teams/:id' => :show_solo, as: :solo
        end
      end

      # audience/team_list ListTeams: GET /api/audience/teams
      resources :teams, only: %i(index)
    end

    scope path: 'contestant', module: 'contestant' do
      # contestant/dashboard Dashboard: GET /api/contestant/dashboard
      resource :dashboard, only: %i(show)

      # contestant/benchmark ListBenchmarkJobs: GET /api/contestant/benchmark_jobs
      # contestant/benchmark EnqueueBenchmarkJob: POST /api/contestant/benchmark_jobs
      # contestant/benchmark GetBenchmarkJob: GET /api/contestant/benchmark_jobs/:id
      resources :benchmark_jobs, only: %i(index create show)

      # contestant/clarifications ListClarifications: GET /api/contestant/clarifications
      # contestant/clarifications RequestClarification: POST /api/contestant/clarifications
      resources :clarifications, only: %i(index create)

      # contestant/notifications ListNotifications: GET /api/contestant/notifications
      resources :notifications, only: %i(index create destroy)

      # contestant/notifications SubscribeNotification: POST /api/contestant/push_subscriptions
      # contestant/notifications UnsubscribeNotification: DELETE /api/contestant/push_subscriptions
      resource :push_subscriptions, only: %i(create destroy)

      # contestant/cloud_formation GetCloudFormation: GET /api/contestant/cloud_formation
      get 'cloud_formation', to: 'cloud_formations#show'
    end

    scope path: 'admin', module: 'admin' do
      # admin/dashboard Dashboard: GET /api/admin/dashboard
      resource :dashboard, only: %i(show) do
        member do
          # audience/dashboard SoloDashboard: GET /api/audience/dashboard/teams/:id
          get 'teams/:id' => :show_solo, as: :admin_solo
        end
      end

      # admin/teams ListTeams: GET /api/admin/teams
      # admin/teams GetTeam: GET /api/admin/teams/:id
      # admin/teams UpdateTeam: PUT /api/admin/teams/:id
      resources :teams, only: %i(index show update) do
        # admin/cloud_formation GetCloudFormation: GET /api/admin/teams/:team_id/cloud_formation
        get 'cloud_formation', to: 'cloud_formations#show'

        # admin/env_checks ListEnvChecks: GET /api/admin/teams/:team_id/env_checks
        resources :env_checks, only: %i(index)
      end


      # admin/benchmark ListBenchmarkJobs: GET /api/admin/benchmark_jobs
      # admin/benchmark EnqueueBenchmarkJob: POST /api/admin/benchmark_jobs
      # admin/benchmark GetBenchmarkJobs: GET /api/admin/benchmark_jobs/:id
      # admin/benchmark CancelBenchmarkJob: DELETE /api/admin/benchmark_jobs/:id
      resources :benchmark_jobs, only: %i(index create show destroy)

      # admin/clarifications ListClarifications: GET /api/admin/clarifications
      # admin/clarifications GetClarification: GET /api/admin/clarifications/:id
      # admin/clarifications RespondClarification: PUT /api/admin/clarifications/:id
      # admin/clarifications CreateClarification: POST /api/admin/clarifications
      resources :clarifications, only: %i(index show update create)

      # admin/clarifications ListClarifications: GET /api/admin/clarifications
      # admin/clarifications GetClarification: GET /api/admin/clarifications/:id
      # admin/clarifications RespondClarification: PUT /api/admin/clarifications/:id
      # admin/clarifications CreateClarification: POST /api/admin/clarifications
      resources :clarifications, only: %i(index show update create)

      # admin/contestant_instances ListContestantInstances: GET /api/admin/contestant_instances
      resources :contestant_instances, only: %i(index)

      # admin/dump_leaderboard GetDumpLeaderboard: GET /api/admin/dump_leaderboard
      get 'dump_leaderboard' => 'leaderboard#dump'
    end

    scope path: 'bench', module: 'bench' do
      # bench/receiving ReceiveBenchmarkJob: POST /api/bench/receive
      post 'receive' => 'queue#receive'
      # bench/receiving CancelOwnedBenchmarkJob: POST /api/bench/cancel_owned
      post 'cancel_owned' => 'queue#cancel_owned'


      # bench/reporting ReportBenchmarkResult: POST /api/bench/benchmark_results
      resources :benchmark_results, only: %i(create) do
        collection do
          # bench/reporting CompleteBenchmarkResult: POST /api/bench/benchmark_results/completion
          post 'completion' => :complete, as: :complete
        end
      end
    end

    get 'env_check_info' => 'env_checks#info'
    get 'ssh_public_keys' => 'env_checks#ssh_public_keys'
    post 'env_checks' => 'env_checks#create'
  end

  scope path: 'admin', module: 'admin' do
    get '/' => 'root#index'
    get '/teams' => 'root#index'
    get '/teams/:id' => 'root#index'
    get '/teams/:id/edit' => 'root#index'
    get '/benchmark_jobs' => 'root#index'
    get '/benchmark_jobs/:id' => 'root#index'
    get '/clarifications' => 'root#index'
    get '/clarifications/:id' => 'root#index'
    get '/contestant_instances' => 'root#index'


    get 'impersonate' => 'impersonate#index', as: :impersonate
    post 'impersonate/contestant' => 'impersonate#contestant'
    post 'impersonate/github' => 'impersonate#github'
    post 'impersonate/discord' => 'impersonate#discord'

    get 'bypass_token' => 'bypass_token#new'
    post 'bypass_token' => 'bypass_token#create'

    resource :session, only: %i(new create), as: :admin_session

    get 'slacktown' => 'debug#slack'
    get 'sync_all_ssh_key' => 'debug#sync_all_ssh_key'
    get 'ssh_key_stats' => 'debug#ssh_key_stats'
    get 'sync_all_discord_stats' => 'debug#sync_all_discord_stats'
    get 'discord_stats' => 'debug#discord_stats'
    get 'long_running_check' => 'debug#long_running_check'
  end
end
