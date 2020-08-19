FactoryBot.define do
  factory :team do
    sequence(:name){ |n| "Team #{n}" }
    email_address { "email@test.invalid" }

    leader factory: :contestant, strategy: :build

    trait :student do
      leader factory: :contestant, student: true, strategy: :build
    end
  end
end
