FactoryBot.define do
  factory :contestant do
    #team
    sequence(:name) { |n| "Contestant #{n}" }
    sequence(:github_login) { |n| "github#{n}" }
    sequence(:github_id) { |n| "gh#{n}" }
    sequence(:discord_tag) { |n| "discord#{n}#0000" }
    sequence(:discord_id) { |n| "discord#{n}" }
    avatar_url { "https://test.invalid/avatar" }
    student { false }
  end
end
