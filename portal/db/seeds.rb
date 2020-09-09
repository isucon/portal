# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
CONTEST_STARTS_AT = Time.at(Contest.to_pb.starts_at.seconds)
CONTEST_ENDS_AT = Time.at(Contest.to_pb.ends_at.seconds)
STUDENT_TEAMS = 100
GENERAL_TEAMS = 200

def generate_team_and_members(student: false)
  contestants = 3.times.map do |i|
    login = Faker::Internet.unique.username
    Contestant.new(
      name: Faker::Name.unique.name,
      github_login: login,
      github_id: login,
      discord_tag: login,
      discord_id: login,
      avatar_url: 'https://avatars1.githubusercontent.com/u/230654?s=400&v=4',
      student: student,
    )
  end

  team = Team.new(
    name: Faker::Team.unique.name,
    email_address: Faker::Internet.unique.email,
    student: student,
  )
  team.members = contestants
  contestants.map(&:save!)
  team.leader_id = contestants.first.id

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
  team
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
      created_at: CONTEST_STARTS_AT + t,
      updated_at: CONTEST_STARTS_AT + t + 60,
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
      created_at: job.finished_at,
      updated_at: job.finished_at,
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

teams.each do |team|
  generate_score(team)
end
