require 'isuxportal/resources/leaderboard_pb'
require 'isuxportal/resources/contest_pb'
require 'isuxportal/misc/leaderboard_etag_pb'

module Contest
  class RegistrationClosed < StandardError; end

  def self.registration_started?(now=Time.zone.now)
    open = Rails.application.config.x.contest.registration_open
    open ? now >= open : true
  end

  def self.registration_open?(now=Time.zone.now)
    open = Rails.application.config.x.contest.registration_open
    close = Rails.application.config.x.contest.registration_close
    if open && close
      (open...close).cover?(now)
    else
      true
    end
  end

  def self.registration_update_closed?(now=Time.zone.now)
    close = Rails.application.config.x.contest.registration_update_close
    close && close <= now
  end

  def self.contest_running?(now=Time.zone.now)
    start = Rails.application.config.x.contest.contest_start
    finish = Rails.application.config.x.contest.contest_end
    if start && finish
      (start...finish).cover?(now)
    else
      true
    end
  end

  def self.contest_started?(now=Time.zone.now)
    start = Rails.application.config.x.contest.contest_start
    start && start <= now
  end

  def self.contest_frozen?(now=Time.zone.now)
    freeze = Rails.application.config.x.contest.contest_freeze
    freeze && freeze <= now
  end

  def self.contest_end?(now=Time.zone.now)
    finish = Rails.application.config.x.contest.contest_end
    if finish
      finish <= now
    else
      false
    end
  end

  def self.contest_open_for_team?(team:, now: Time.zone.now, final: Rails.application.config.x.contest.final)
    general = !Contest.contest_end?(now) && Contest.contest_running?(now)
    return true if general
    return false unless team

    start = Rails.application.config.x.contest.contest_start
    finish = Rails.application.config.x.contest.contest_end
    return false unless start && finish

    extra_time_in_seconds = team.extra_time_assignments.where(final: final).first&.seconds
    return false unless extra_time_in_seconds

    (start...finish+extra_time_in_seconds).cover?(now)
  end

  def self.registration_invitation_closed?(now=Time.zone.now)
    close = Rails.application.config.x.contest.registration_invitation_close
    if close
      close <= now
    else
      false
    end
  end

  def self.max_teams_reached?
    team_count >= max_teams
  end

  def self.team_count
    Team.active.visible.count
  end

  def self.max_teams
    Rails.application.config.x.contest.max_teams || 0
  end

  def self.to_pb(now: Time.zone.now, team: nil)
    auto_contest_epoch = now.utc.hour/8*8
    Isuxportal::Proto::Resources::Contest.new(
      registration_opens_at: Rails.application.config.x.contest.registration_open,
      registration_closes_at: Rails.application.config.x.contest.registration_close,
      starts_at: Rails.application.config.x.contest.contest_start&.to_time || Time.utc(now.utc.year, now.utc.month, now.utc.day, auto_contest_epoch, 0, 0),
      freezes_at: Rails.application.config.x.contest.contest_freeze&.to_time || Time.utc(now.utc.year, now.utc.month, now.utc.day, auto_contest_epoch+7, 0, 0),
      ends_at: Rails.application.config.x.contest.contest_end&.to_time || Time.utc(now.utc.year, now.utc.month, now.utc.day, auto_contest_epoch+8, 0, 0),
      frozen: Rails.application.config.x.contest.contest_freeze&.yield_self{ |_| now >= _ } || false,
      status: case
      when team && contest_open_for_team?(now: now, team: team)
        Isuxportal::Proto::Resources::Contest::Status::STARTED
      when contest_running?(now)
        Isuxportal::Proto::Resources::Contest::Status::STARTED
      when contest_end?(now)
        Isuxportal::Proto::Resources::Contest::Status::FINISHED
      when registration_open?(now)
        Isuxportal::Proto::Resources::Contest::Status::REGISTRATION
      else
        Isuxportal::Proto::Resources::Contest::Status::STANDBY
      end,
    )
  end

  def self.leaderboard_etag(admin: false, team: nil)
    teams = Team.active.promoted.count
    team_last_updated = Team.active.promoted.pluck(:updated_at).max

    latest_result = BenchmarkResult
      .where(finished: true)
      .where('exit_status = 0 AND exit_signal is null') # XXX: adhoc
      .order(updated_at: :desc)
      .limit(1)
    unless admin
      latest_result = latest_result.marked_before_contest_ended
      latest_result = latest_result.visible_not_frozen(team)
    end

    latest_result_id, latest_result_at = latest_result.pluck(:id, :marked_at)[0]
    latest_progress_id, latest_progress_at = latest_progress&.pluck(:id, :marked_at)&.first

    Isuxportal::Proto::Misc::LeaderboardEtag.encode(
      Isuxportal::Proto::Misc::LeaderboardEtag.new(
        admin: admin,
        team_id: team&.id || 0,
        team_count: teams,
        team_last_updated: team_last_updated&.to_time,
        latest_result_id: latest_result_id  || 0,
        latest_result_at: latest_result_at&.to_time,
        latest_progress_id: latest_progress_id || 0,
        latest_progress_at: latest_progress_at&.to_time,
        has_progress: false,
      )
    )
  end

  def self.leaderboard_cached(admin: false, team: nil)
    Rails.cache.fetch("leaderboard-#{!admin}-t#{team&.id}", expires_in: 30.seconds) do
      leaderboard(admin: admin, team: team).to_pb
    end
  end

  def self.leaderboard(admin: false, team: nil, solo: false, now: nil, history: true)
    view_as_team = team
    history = true if now
    #p :___
    #t0 = t_a = Time.now
    raise ArgumentError, "solo requested but no team given" if solo && !team
    visibility = case
                 when admin
                   :admin
                 when team
                   :contestant
                 else
                   :audience
                 end

    benchmark_results = BenchmarkResult
      .successfully_finished
      .of_visibility(visibility, team)
    if now
      benchmark_results = benchmark_results.where('marked_at <= ?', now)
    end
    if solo
      benchmark_results = benchmark_results.where(team_id: team.id)
    end

    
    #t_b = Time.now; p leaderboard_time_querybuild: t_b-t_a; t_a = t_b
    teams = if history
      query = benchmark_results
            .order(marked_at: :asc)
            .select(:team_id, :score, :passed, :created_at, :marked_at)
            .to_sql
      ApplicationRecord.connection_pool.with_connection do |conn|
        conn.raw_connection.query(query, cast: true, cache_rows: false, stream: true).group_by(&:first)
      end
    else
      ids = benchmark_results.group(:team_id).pluck(:team_id, 'max(benchmark_results.id)').map(&:last)
      query = BenchmarkResult.where(id: ids)
        .select(:team_id, :score, :passed, :created_at, :marked_at)
        .to_sql
      ApplicationRecord.connection_pool.with_connection do |conn|
        conn.raw_connection.query(query, cast: true, cache_rows: false, stream: true).group_by(&:first)
      end
    end
    #t_b = Time.now; p leaderboard_time_querya: t_b-t_a; t_a = t_b
    #teams = results
    #t_b = Time.now; p leaderboard_time_queryb: t_b-t_a; t_a = t_b
    team_objs = solo ? {team.id => team} : Team.active.promoted.includes(admin ? :best_benchmark_result_for_admin : :best_benchmark_result_for_audience).order(id: :asc).map { |t| [t.id, t] }.to_h
    team_exists = {}
    #t_b = Time.now; p leaderboard_time_queryc: t_b-t_a; t_a = t_b
    items = teams.map do |team_id, rs|
      team = team_objs[team_id]
      next unless team
      #rs.reduce(Time.at(0)) { |r,i| raise unless r <= i.marked_at; i.marked_at }
      #scores = rs.sort_by(&:marked_at).map do |r|
      best_score = nil
      scores = rs.map do |(_tid, score, passed, created_at, marked_at)|
        score = 0 if passed == 0
        i = Isuxportal::Proto::Resources::LeaderboardItem::LeaderboardScore.new(
          score: score,
          started_at: created_at, # XXX: benchmark_results.created_at != benchmark_jobs.started_at ?
          marked_at: marked_at,
        )
        best_score = i if !best_score || i.score > best_score.score
        i
      end
      team_exists[team_id] = true
      Isuxportal::Proto::Resources::LeaderboardItem.new(
        team: team.to_pb(detail: false, members: false),
        score_history: history ? Isuxportal::Proto::Resources::LeaderboardItem::History.new(scores: scores) : nil,
        best_score: now ? best_score : (team.best_benchmark_result_of_visibility(visibility, view_as_team)&.then do |i|
          Isuxportal::Proto::Resources::LeaderboardItem::LeaderboardScore.new(
            score: i.score,
            started_at: i.created_at.to_time,
            marked_at: i.marked_at&.to_time,
          )
        end),
        latest_score: scores[-1],
      )
    end
    #t_b = Time.now; p leaderboard_time_itemmap: t_b-t_a; t_a = t_b

    items.compact!
    items.sort_by! { |li| s = li.latest_score; [s.score, -s.marked_at.seconds, -s.marked_at.nanos] }
    #t_b = Time.now; p leaderboard_time_sort: t_b-t_a; t_a = t_b
    items.reverse!
    #t_b = Time.now; p leaderboard_time_rev: t_b-t_a; t_a = t_b

    items.concat(team_objs.map do |tid, team|
      next if team_exists[tid]
      Isuxportal::Proto::Resources::LeaderboardItem.new(
        team: team.to_pb(detail: false, members: false),
        score_history: Isuxportal::Proto::Resources::LeaderboardItem::History.new(scores: []),
        best_score: nil,
        latest_score: nil,
      )
    end.compact)

    #t_b = Time.now; p leaderboard_time_prog: t_b-t_a; t_a = t_b
    items.reject! { |_| _.team.disqualified || _.team.withdrawn }
    hidden_items, visible_items = items.partition { |_| _.team.hidden }
    #t_b = Time.now; p leaderboard_time_rej: t_b-t_a; t_a = t_b

    r = Isuxportal::Proto::Resources::Leaderboard.new(
      teams: visible_items,
      hidden_teams: hidden_items,
      progresses: [],
      contest: Contest.to_pb,
      generated_at: Time.now.to_time,
    )
    #t_b = Time.now; p leaderboard_time: t_b-t_a; t_a = t_b
    #p leaderboard_timetime: t_b-t0
    r
  end
end
