require 'isuxportal/resources/benchmark_job_pb'

class BenchmarkJob < ApplicationRecord
  class InvalidTransition < StandardError; end
  belongs_to :team
  belongs_to :target, class_name: 'ContestantInstance'

  has_one :benchmark_result
  has_one :survey_response

  enum(status: Isuxportal::Proto::Resources::BenchmarkJob::Status.descriptor.to_enum.sort_by(&:last).map do |k,v|
    [k.to_s.downcase.to_sym, v]
  end.to_h)

  validate :validate_handle
  validate :validate_no_concurrent_jobs
  validate :validate_finished

  before_validation :generate_handle

  # scope :joins_score, -> { left_outer_joins(:benchmark_result).select('benchmark_jobs.*, benchmark_results.score as score') }
  scope :joins_score, -> { left_outer_joins(:benchmark_result).select(BenchmarkJob.column_names, 'benchmark_results.score as score', '1 as score_loaded') }
  scope :created_before_contest_ended, -> {
    if Rails.application.config.x.contest.contest_end
      where('benchmark_jobs.created_at < ?', Rails.application.config.x.contest.contest_end) 
    else
      where('1=1')
    end
  }

  scope :active, -> { where.not(status: %i(cancelled errored finished)) }

  def score
    read_attribute(:score_loaded) == 1 ? read_attribute(:score) : benchmark_result&.score
  end

  def to_pb(admin: false, team: false, detail: false)
    Isuxportal::Proto::Resources::BenchmarkJob.new(
      id: id,
      team_id: team_id,
      target_id: target_id,
      status: status_before_type_cast,
      score: score,
      instance_name: admin ? self.instance_name : '',
      created_at: created_at&.to_time,
      updated_at: updated_at&.to_time,
      started_at: started_at&.to_time,
      finished_at: finished_at&.to_time,
      team: team ? self.team.to_pb : nil,
      target: detail ? target&.to_pb : nil,
      result: detail ? benchmark_result&.to_pb(admin: admin) : nil,
    )
  end

  def closed?
    errored? || cancelled? || finished?
  end

  def start!(instance_name)
    raise InvalidTransition unless pending?
    self.instance_name = instance_name
    self.status = :running
    self.save!
  end

  # @param [Isuxportal::Proto::Resources::BenchmarkResult] pb
  def submit_result_from_pb!(pb)
    raise InvalidTransition unless running?

    # TODO: SurveyResponse
    ApplicationRecord.transaction do
      result = benchmark_result || build_benchmark_result
      result.update_from_pb!(pb)
      self.started_at ||= Time.zone.now
      if result.finished?
        self.status = case
                      when result.errored?
                        :errored
                      else
                        :finished
                      end
        self.finished_at = result.marked_at || Time.zone.now
      end
      self.save!
      result.save!

      if pb.survey_response
        response = team.survey_response || team.build_survey_response
        response.benchmark_job_id = self.id
        response.language = pb.survey_response.language
        response.save!
      end
    end
  end

  def cancel!
    raise InvalidTransition if closed?
    self.status = :cancelled
    self.finished_at = Time.zone.now
    self.save!
  end

  def error!(reason = "[BUG] Benchmarker didn't successfully finish")
    raise InvalidTransition if closed?
    self.status = :errored
    self.finished_at = Time.zone.now
    result = benchmark_result || build_benchmark_result
    result.marked_at = self.finished_at
    result.reason = reason
    result.finished = true
    result.passed = false
    result.save!
    self.save!
    BenchmarkCompletionJob.perform_later(self)
  end

  private def generate_handle
    if instance_name
      self.handle ||= SecureRandom.urlsafe_base64(64)
    end
  end

  private def validate_handle
    if running? || finished?
      errors.add :instance_name, "must be present for running or finished job" unless instance_name.present?
      errors.add :handle, "must be present for running or finished job" unless handle.present?
    end
  end

  private def validate_no_concurrent_jobs
    if (pending? || running?) && self.class.where(team_id: team_id, status: %i(pending running)).merge(self.class.where.not(id: id)).count > 0
      errors.add :team_id, "must have no other concurrent job"
    end
  end

  private def validate_finished
    if finished?
      errors.add :benchmark_result, "finished must be present 1 for finished job" unless benchmark_result
    end
  end

end
