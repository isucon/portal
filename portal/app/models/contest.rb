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
    Team.active.count
  end

  def self.max_teams
    Rails.application.config.x.contest.max_teams || 0
  end

  def self.to_pb(now: Time.zone.now)
    auto_contest_epoch = now.utc.hour/8*8
    Isuxportal::Proto::Resources::Contest.new(
      registration_opens_at: Rails.application.config.x.contest.registration_open,
      registration_closes_at: Rails.application.config.x.contest.registration_close,
      starts_at: Rails.application.config.x.contest.contest_start || Time.utc(now.utc.year, now.utc.month, now.utc.day, auto_contest_epoch, 0, 0),
      freezes_at: Rails.application.config.x.contest.contest_freeze || Time.utc(now.utc.year, now.utc.month, now.utc.day, auto_contest_epoch+7, 0, 0),
      ends_at: Rails.application.config.x.contest.contest_end || Time.utc(now.utc.year, now.utc.month, now.utc.day, auto_contest_epoch+8, 0, 0),
      frozen: Rails.application.config.x.contest.contest_freeze&.yield_self{ |_| now >= _ } || false,
      status: case
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

  def self.leaderboard_etag_cached(admin: false, team: nil, progresses: false)
    Rails.cache.fetch("leaderboardetag-#{!admin}-t#{team&.id}-#{progresses}", expires_in: 30.seconds) do
      leaderboard_etag(admin: admin, team: team, progresses: progresses)
    end
  end

  def self.leaderboard_etag(admin: false, team: nil, progresses: false)
    teams = Team.count
    team_last_updated = Team.pluck(:updated_at).max

    latest_result = BenchmarkResult
      .where(finished: true)
      .where('exit_status = 0 AND exit_signal is null') # XXX: adhoc
      .order(updated_at: :desc)
      .limit(1)
    unless admin
      latest_result = latest_result.marked_before_contest_ended
      latest_result = latest_result.visible_not_frozen(team)
    end

    if progresses
      latest_progress = BenchmarkResult
        .joins(:benchmark_job)
        .where(benchmark_jobs: {status: :running})
        .where(finished: false)
        .where('exit_status is null AND exit_signal is null') # XXX: adhoc
        .order(updated_at: :desc)
        .limit(1)
      unless admin
        latest_progress = latest_progress.marked_before_contest_ended
        latest_progress = latest_progress.visible_not_frozen(team)
      end
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
        has_progress: progresses,
      )
    )
  end

  def self.leaderboard_cached(admin: false, team: nil, progresses: false)
    Rails.cache.fetch("leaderboard-#{!admin}-t#{team&.id}-#{progresses}", expires_in: 30.seconds) do
      leaderboard(admin: admin, team: team, progresses: progresses).to_pb
    end
  end

  def self.leaderboard(admin: false, team: nil, progresses: false, solo: false, now: nil)
    benchmark_results = BenchmarkResult
      .successfully_finished
      .order(marked_at: :asc)
    unless admin
      benchmark_results = benchmark_results.marked_before_contest_ended
      benchmark_results = benchmark_results.visible_not_frozen(team)
    end
    if now
      benchmark_results = benchmark_results.where('marked_at <= ?', now)
    end
    if solo && team
      benchmark_results = benchmark_results.where(team_id: team.id)
    end

    query = benchmark_results
      .select(:team_id, :score, :created_at, :marked_at)
      .to_sql
    teams = ApplicationRecord.connection_pool.with_connection do |conn|
      conn.raw_connection.query(query, cast: true, cache_rows: false, stream: true).group_by(&:first) 
    end
    team_objs = Team.active.order(id: :asc).map { |t| [t.id, t] }.to_h
    items = teams.map do |team_id, rs|
      team = team_objs[team_id]
      next unless team
      #rs.reduce(Time.at(0)) { |r,i| raise unless r <= i.marked_at; i.marked_at }
      #scores = rs.sort_by(&:marked_at).map do |r|
      best_score = nil
      scores = rs.map do |(_tid, score, created_at, marked_at)|
        i = Isuxportal::Proto::Resources::Leaderboard::LeaderboardItem::LeaderboardScore.new(
          score: score,
          started_at: created_at, # XXX: benchmark_results.created_at != benchmark_jobs.started_at ?
          marked_at: marked_at,
        )
        best_score = i if !best_score || i.score > best_score.score
        i
      end
      Isuxportal::Proto::Resources::Leaderboard::LeaderboardItem.new(
        team: team.to_pb(detail: false, members: false),
        scores: scores,
        best_score: best_score,
        latest_score: scores[-1],
      )
    end

    items.compact!
    items.sort_by! { |li| s = li.scores[-1]; [s.score, -s.marked_at.seconds, -s.marked_at.nanos] }
    items.reverse!

    items.concat(team_objs.map do |tid, team|
      next if teams[tid]
      Isuxportal::Proto::Resources::Leaderboard::LeaderboardItem.new(
        team: team.to_pb(detail: false, members: false),
        scores: [],
        best_score: nil,
        latest_score: nil,
      )
    end.compact)

    if progresses
      benchmark_progresses = BenchmarkResult
        .select(:team_id, :score, :created_at, :marked_at)
        .joins(:benchmark_job)
        .where(benchmark_jobs: {status: :running})
        .where(finished: false)
        .where('exit_status is null AND exit_signal is null') # XXX: adhoc
        .preload(:team)
      unless admin
        benchmark_progresses = benchmark_progresses.marked_before_contest_ended
        benchmark_progresses = benchmark_progresses.visible_not_frozen(team)
      end
      if solo && team
        benchmark_progresses = benchmark_progresses.where(team_id: team.id)
      end

      progresses_items = benchmark_progresses.group_by(&:team_id).map do |team_id, rs|
        score = rs.sort_by(&:marked_at)[-1].yield_self do |r|
          Isuxportal::Proto::Resources::Leaderboard::LeaderboardItem::LeaderboardScore.new(
            score: r.score,
            started_at: r.created_at.to_time, # XXX: benchmark_results.created_at != benchmark_jobs.started_at ?
            marked_at: r.marked_at.to_time,
          )
        end
        Isuxportal::Proto::Resources::Leaderboard::LeaderboardItem.new(
          team: rs[0].team.to_pb(detail: false, members: false),
          scores: [],
          best_score: nil,
          latest_score: score,
        )
      end

    end

    items.reject! { |_| !admin && _.team.hidden && team&.id != _.team.id }
    items.reject! { |_| _.team.disqualified || _.team.withdrawn }

    Isuxportal::Proto::Resources::Leaderboard.new(
      teams: items,
      general_teams: items.reject { |_| _.team.student.status },
      student_teams: items.select { |_| _.team.student.status },
      progresses: progresses_items || [],
      contest: Contest.to_pb,
      generated_at: Time.now.to_time,
    )
  end
end
