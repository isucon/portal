require 'isuxportal/resources/benchmark_result_pb'

class BenchmarkResult < ApplicationRecord
  belongs_to :team
  belongs_to :benchmark_job

  validates :marked_at, presence: true

  validate :validate_finished_and_passed
  validate :validate_immutable_after_finish
  validate :validate_marked_at_linear
  validate :validate_team_must_not_change
  validate :validate_benchmark_job_must_not_change

  before_validation :set_team_from_benchmark_job
  before_validation :set_score_zero_when_failed

  scope :successfully_finished, -> { where(finished: true).where('exit_status = 0 and exit_signal is null') }
  scope :marked_before_contest_ended, -> {
    if Rails.application.config.x.contest.contest_end
      where('marked_at < ?', Rails.application.config.x.contest.contest_end) 
    else
      where('1=1')
    end
  }
  scope :visible_not_frozen, -> (team) {
    if Rails.application.config.x.contest.contest_freeze
      where('(benchmark_results.team_id = ? OR benchmark_results.marked_at < ?)', team&.id, Rails.application.config.x.contest.contest_freeze) 
    else
      where('1=1')
    end
  }

  def errored?
    finished? && (signaled? || !successfully_exited?)
  end

  def signaled?
    finished? && !exit_signal.nil?
  end

  def successfully_exited?
    finished? && exit_status == 0
  end

  def to_pb(admin: false)
    Isuxportal::Proto::Resources::BenchmarkResult.new(
      finished: finished,
      passed: !!passed,
      score: score,
      score_breakdown: Isuxportal::Proto::Resources::BenchmarkResult::ScoreBreakdown.new(
        raw: score_raw,
        deduction: score_deduction,
      ),
      execution: finished ? Isuxportal::Proto::Resources::BenchmarkResult::Execution.new(
        reason: reason,
        stdout: stdout,
        stderr: admin ? stderr : "",
        exit_status: admin ? (exit_status || -1) : -2,
        exit_signal: admin ? (exit_signal || -1) : -2,
        signaled: admin && signaled?,
      ) : nil,
      marked_at: marked_at&.to_time,
    )
  end

  # @param [Isuxportal::Proto::Resources::BenchmarkResult] pb
  def update_from_pb!(pb)
    #Rails.logger.debug "Updating BenchmarkResult(id=#{self.id}) with #{pb.inspect}"
    self.assign_attributes(
      finished: pb.finished,
      passed: pb.passed,
      score: pb.score == -1 ? (pb.finished && !pb.passed ? 0 : (pb.score_breakdown&.raw || 0) - (pb.score_breakdown&.deduction || 0)) : pb.score,
      score_raw: pb.score_breakdown&.raw || 0,
      score_deduction: pb.score_breakdown&.deduction || 0,
      reason: pb.execution&.reason,
      stdout: pb.execution&.stdout,
      stderr: pb.execution&.stderr,
      exit_status: pb.execution&.exit_status&.yield_self { |_| _ >= 0 ? _ : nil },
      exit_signal: pb.execution&.signaled ? pb.execution&.exit_signal : nil,
      marked_at: pb.marked_at&.yield_self { |_| Time.zone.at(_.seconds, _.nanos / 1000) },
    )
    #Rails.logger.debug self.inspect
  end

  private def validate_finished_and_passed
    if finished && passed.nil?
      errors.add :passed, "must not be nil for finished benchmark result"
    end
  end

  private def validate_immutable_after_finish
    if finished && !finished_changed? && changed?
      errors.add :finished, "records must not be changed"
    end
  end

  private def validate_marked_at_linear
    if marked_at_changed? && marked_at_was && marked_at < marked_at_was
      errors.add :marked_at, "must be greater than the present value"
    end
  end

  private def validate_team_must_not_change
    if persisted? && team_id_changed? && team_id_was != team_id
      errors.add :team_id, "must not change"
    end
  end

  private def set_team_from_benchmark_job
    self.team = self.benchmark_job.team
  end

  private def set_score_zero_when_failed
    if finished? && !passed?
      self.score = 0
    end
  end

  private def validate_benchmark_job_must_not_change
    if persisted? && benchmark_job_id_changed? && benchmark_job_id_was != team_id
      errors.add :benchmark_job, "must not change"
    end
  end

end
