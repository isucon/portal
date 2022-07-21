require 'isuxportal/resources/team_pb'

class Team < ApplicationRecord
  has_many :members, class_name: 'Contestant', dependent: :destroy
  has_one :leader, class_name: 'Contestant'

  has_many :benchmark_jobs, dependent: :destroy
  has_many :benchmark_results, dependent: :destroy
  has_many :clarifications, dependent: :destroy
  has_many :contestant_instances, dependent: :destroy
  has_many :env_checks, dependent: :destroy
  has_many :extra_time_assignments, dependent: :destroy

  # public may return a result for frozen 
  belongs_to :best_benchmark_result, class_name: 'BenchmarkResult', optional: true
  belongs_to :best_benchmark_result_for_audience, class_name: 'BenchmarkResult', optional: true
  belongs_to :best_benchmark_result_for_admin, class_name: 'BenchmarkResult', optional: true

  has_one :survey_response, dependent: :destroy

  validates :name, presence: true, uniqueness: true
  validates :email_address, presence: true
  validates :invite_token, presence: true

  validate :validate_leader_belongs_to_team

  before_validation :generate_invite_token
  before_validation :generate_student_status

  scope :include_best_benchmark_result_of_visibility, -> (visibility) {
    case visibility
    when :audience
      includes(:best_benchmark_result_for_audience)
    when :contestant
      includes(:best_benchmark_result)
    when :admin
      includes(:best_benchmark_result_for_admin)
    end
  }

  scope :active, -> { where(withdrawn: false, disqualified: false) }
  scope :promoted, -> { Rails.application.config.x.contest.final ? where(final_participation: true) : where('1=1') }
  scope :visible, -> { where(is_hidden: false) }
  scope :invisible, -> { where(is_hidden: true) }

  def active?
    !withdrawn? && !disqualified?
  end

  def joinable?
    members.count < 3
  end

  def student?
    a = read_attribute(:student)
    return a unless a.nil?
    members_all_student?
  end

  def promoted?
    Rails.application.config.x.contest.final ? final_participation : true
  end

  def update_student_status
    self.student = members_all_student?
  end

  def members_all_student?
    members.size > 0 && members.all?(&:student?)
  end

  def generate_invite_token
    self.invite_token ||= SecureRandom.urlsafe_base64(64)
  end

  def best_benchmark_result_of_visibility(visibility, team = nil)
    case visibility
    when :admin
      best_benchmark_result_for_admin
    when :contestant
      team == self ? best_benchmark_result : best_benchmark_result_for_audience
    when :audience
      best_benchmark_result_for_audience
    else
      raise ArgumentError, "unknown visibility #{visibility.inspect}"
    end
  end

  def to_pb(detail: false, members: false, member_detail: false)
    Isuxportal::Proto::Resources::Team.new(
      id: id,
      name: name,
      leader_id: leader_id,
      member_ids: members ? self.members.map(&:id) : [],
      final_participation: final_participation,
      hidden: is_hidden,
      withdrawn: withdrawn,
      disqualified: disqualified?,
      student: Isuxportal::Proto::Resources::Team::StudentStatus.new(status: student?),
      detail: !detail ? nil : Isuxportal::Proto::Resources::Team::TeamDetail.new(
        email_address: email_address,
        invite_token: invite_token,
      ),
      leader: members ? leader&.to_pb(detail: member_detail) : nil,
      members: members ? self.members&.map { |_| _.to_pb(detail: member_detail) } : nil,
    )
  end

  private def validate_leader_belongs_to_team
    if leader && self.persisted? && leader.team_id != self.id
      errors.new :leader, "must belong to the team"
    end
  end

  private def generate_student_status
    update_student_status if student.nil?
  end
end
