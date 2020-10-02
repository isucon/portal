# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

@seed_jobs = Rails.root.join('db', 'seed-jobs.jsonl').read.each_line.map { |_| JSON.parse(_.chomp, symbolize_names: true) }.group_by { |_| _.fetch(:team_id) }
@seed_results = Rails.root.join('db', 'seed-results.jsonl').read.each_line.map { |_| JSON.parse(_.chomp, symbolize_names: true) }.map { |_| [_.fetch(:benchmark_job_id), _] }.to_h
@seed_team_ids = @seed_jobs.keys
@seed_team_id_map = {}

CONTEST_STARTS_AT = Time.at(Contest.to_pb.starts_at.seconds)
CONTEST_ENDS_AT = Time.at(Contest.to_pb.ends_at.seconds)
STUDENT_TEAMS = 100
GENERAL_TEAMS = 600-STUDENT_TEAMS

def generate_team_and_members(student: false)
  team = Team.new(
    name: Faker::Team.unique.name,
    email_address: Faker::Internet.unique.email,
    student: student,
  )
  team.save!

  contestants = 3.times.map do |i|
    login = Faker::Internet.unique.username
    Contestant.new(
      team_id: team.id,
      name: Faker::Name.unique.name,
      github_login: login,
      github_id: login,
      discord_tag: login,
      discord_id: login,
      avatar_url: 'https://avatars1.githubusercontent.com/u/230654?s=400&v=4',
      student: student,
    )
  end
  contestants.map(&:save!)
  team.leader_id = contestants.first.id
  team.save!

  3.times do |i|
    team.contestant_instances << ContestantInstance.new(
      cloud_id: 0,
      number: i,
      status: Isuxportal::Proto::Resources::ContestantInstance::Status::RUNNING,
      private_ipv4_address: Faker::Internet.unique.private_ip_v4_address,
      public_ipv4_address: Faker::Internet.unique.public_ip_v4_address,
    )
  end

  team.save!
  @seed_team_id_map[team.id] = @seed_team_ids.shift
  team
end

def load_score(team)
  @seed_jobs.fetch(@seed_team_id_map.fetch(team.id)).each do |seed_job|
    job = BenchmarkJob.new(
      team_id: team.id,
      status: seed_job.fetch(:status),
      target: team.contestant_instances.first,
      instance_name: seed_job.fetch(:instance_name, 'default'),
      started_at: seed_job[:started_at] ? CONTEST_STARTS_AT + seed_job.fetch(:started_at) : nil,
      finished_at: seed_job[:finished_at] ? CONTEST_STARTS_AT + seed_job.fetch(:finished_at) : nil,
      #created_at: CONTEST_STARTS_AT + t,
      #updated_at: CONTEST_STARTS_AT + t + 60,
    )
    seed_result = @seed_results[seed_job.fetch(:id)]
    if seed_result
      job.benchmark_result = BenchmarkResult.new(
        team_id: team.id,
        score: seed_result.fetch(:score),
        score_raw: seed_result.fetch(:score_raw),
        score_deduction: seed_result.fetch(:score_deduction),
        finished: seed_result.fetch(:finished),
        passed: seed_result.fetch(:passed),
        exit_status: seed_result.fetch(:exit_status),
        exit_signal: seed_result.fetch(:exit_signal),
        marked_at: CONTEST_STARTS_AT + seed_result.fetch(:marked_at),
      )
    end
    job.save!
  end
end

def generate_score(team)
  resolution = 30
  time_span = (CONTEST_ENDS_AT - CONTEST_STARTS_AT) / resolution
  score_goal = 5000 + 25000 * rand
  score_start = 1000 + 100 * rand
  coef = score_goal / ((CONTEST_ENDS_AT - CONTEST_STARTS_AT) ** 2 + score_start)
  resolution.times do |i|
    t = time_span * (i + rand)
    passed = rand > 0.1
    score_raw = passed ? (coef * (t ** 2) + score_start + rand*1000).to_i : 0
    deduction = passed ? [0, rand * 1000 - 2000].max : 0
    job = BenchmarkJob.new(
      team_id: team.id,
      status: Isuxportal::Proto::Resources::BenchmarkJob::Status::FINISHED,
      target: team.contestant_instances.first,
      instance_name: team.contestant_instances.first.private_ipv4_address,
      started_at: CONTEST_STARTS_AT + t,
      finished_at: CONTEST_STARTS_AT + t + 60,
      #created_at: CONTEST_STARTS_AT + t,
      #updated_at: CONTEST_STARTS_AT + t + 60,
    )
    job.benchmark_result = BenchmarkResult.new(
      team_id: team.id,
      score: score_raw - deduction,
      score_raw: score_raw,
      score_deduction: deduction,
      finished: true,
      passed: passed,
      exit_status: 0,
      marked_at: job.finished_at,
    )
    job.save!
  end
end

teams = []
STUDENT_TEAMS.times do
  teams << generate_team_and_members(student: false)
end
GENERAL_TEAMS.times do
  teams << generate_team_and_members(student: true)
end

require 'thread'
q = Queue.new
teams.each do |t|
  q << t
end
q.close
4.times.map do
  Thread.new do
    while t = q.pop
      if @seed_team_id_map[t.id]
        load_score(t)
      else
        generate_score(t)
      end
    end
  end
end.each(&:join)
