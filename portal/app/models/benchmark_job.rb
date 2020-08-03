require 'isuxportal/resources/benchmark_job_pb'

class BenchmarkJob < ApplicationRecord
  class InvalidTransition < StandardError; end
  belongs_to :team

  has_one :benchmark_result

  enum status: Isuxportal::Proto::Resources::BenchmarkJob::Status.descriptor.to_enum.sort_by(&:last).map do |k,v|
    [k.to_s.downcase.to_sym, v]
  end.to_h

  validate :validate_handle
  validate :validate_no_concurrent_jobs

  before_validation :generate_handle
  before_validation :generate_finished

  # scope :joins_score, -> { left_outer_joins(:benchmark_result).select('benchmark_jobs.*, benchmark_results.score as score') }
  scope :joins_score, -> { eager_load(:benchmark_result) }

  def score
    read_attribute(:score) || benchmark_result&.score
  end

  def to_pb(admin: false, team: false, detail: false)
    Isuxportal::Proto::Resources::BenchmarkJob.new(
      id: id,
      team_id: team_id,
      target_id: 0, # TODO:
      status: status_before_type_cast,
      score: score,
      instance_name: admin ? self.instance_name : '',
      created_at: created_at,
      updated_at: updated_at,
      started_at: started_at,
      finished_at: finished_at,
      team: team ? self.team.to_pb : nil,
      target: detail ? nil : nil, # TODO:
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

    ApplicationRecord.transaction do
      result = benchmark_result || build_benchmark_result
      result.update_from_pb!(pb)
      if result.finished?
        self.status = case
                      when result.errored?
                        :errored
                      else
                        :finished
                      end
        self.finished_at = Time.zone.now
        self.save!
      end
    end
  end

  def cancel!
    raise InvalidTransition if closed?
    self.status = :cancelled
    self.finished_at = Time.zone.now
    self.save!
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

  private def validate_finished
    if finished?
      errors.add :benchmark_execution, "must be present for finished job" unless benchmark_execution
      errors.add :benchmark_result, "finished must be present 1 for finished job" unless benchmark_result
    end
  end

end
