# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

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
  team.save!
  team
end

teams = []
200.times do
  teams << generate_team_and_members(student: false)
end
100.times do
  teams << generate_team_and_members(student: true)
end
