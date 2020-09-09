require 'isuxportal/resources/leaderboard_pb'
require 'isuxportal/resources/contest_pb'

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
    auto_contest_epoch = now.utc.hour/8
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

  def self.leaderboard(admin: false, team: nil)
    benchmark_results = BenchmarkResult
      .select(:team_id, :score, :created_at, :marked_at)
      .successfully_finished
      .order(id: :asc)
      .preload(:team)
    unless admin
      benchmark_results = benchmark_results.marked_before_contest_ended
      benchmark_results = benchmark_results.visible_not_frozen(team)
    end

    teams = benchmark_results.group_by(&:team_id)
    items = teams.map do |team_id, rs|
      scores = rs.sort_by(&:marked_at).map do |r|
        Isuxportal::Proto::Resources::Leaderboard::LeaderboardItem::LeaderboardScore.new(
          score: r.score,
          started_at: r.created_at.to_time, # XXX: benchmark_results.created_at != benchmark_jobs.started_at ?
          marked_at: r.marked_at.to_time,
        )
      end
      Isuxportal::Proto::Resources::Leaderboard::LeaderboardItem.new(
        team: rs[0].team.to_pb(detail: false, members: false),
        scores: scores,
        best_score: scores.max_by(&:score),
        latest_score: scores[-1],
      )
    end

    items.sort_by! { |li| s = li.scores[-1]; [s.score, -s.marked_at.seconds, -s.marked_at.nanos] }
    items.reverse!

    items.concat(Team.active.order(id: :desc).where.not(id: items.map { |_| _.team.id }).map do |team|
      Isuxportal::Proto::Resources::Leaderboard::LeaderboardItem.new(
        team: team.to_pb(detail: false, members: false),
        scores: [],
        best_score: nil,
        latest_score: nil,
      )
    end.to_a)

    benchmark_progresses = BenchmarkResult
      .select(:team_id, :score, :created_at, :marked_at)
      .joins(:benchmark_job)
      .where(benchmark_jobs: {status: :running})
      .where(finished: false)
      .where('exit_status is null AND exit_signal is null') # XXX: adhoc
      .preload(:team)
    unless admin
      benchmark_progresses = benchmark_progresses.where('marked_at < ?', Rails.application.config.x.contest.contest_end) if Rails.application.config.x.contest.contest_end
      benchmark_progresses = benchmark_progresses.where('(benchmark_results.team_id = ? OR benchmark_results.marked_at < ?)', team&.id, Rails.application.config.x.contest.contest_freeze) if Rails.application.config.x.contest.contest_freeze
    end
    progresses = benchmark_progresses.group_by(&:team_id).map do |team_id, rs|
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


    items.reject! { |_| !admin && _.team.hidden && team&.id != _.team.id }
    items.reject! { |_| _.team.disqualified || _.team.withdrawn }

    Isuxportal::Proto::Resources::Leaderboard.new(
      teams: items,
      general_teams: items.reject { |_| _.team.student.status },
      student_teams: items.select { |_| _.team.student.status },
      progresses: progresses,
      contest: Contest.to_pb,
    )
  end
end
