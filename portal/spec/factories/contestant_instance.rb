FactoryBot.define do
  factory :contestant_instance do
    team
    sequence(:cloud_id) { |n| "cloud#{n}" }
    sequence(:public_ipv4_address) { |n|  "10.0.0.#{n}" }
    sequence(:private_ipv4_address) { |n|  "10.1.0.#{n}" }
    status { :running }

    trait :target do 
    end
  end
end
