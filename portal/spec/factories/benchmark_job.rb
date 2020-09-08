FactoryBot.define do
  factory :benchmark_job do
    team
    target { build(:contestant_instance, team: team) }
    status { :pending }

    transient do
      scored { 100 }
      marked_at { Time.zone.now }
    end

    trait :progress do
      status { :running }
      instance_name { "instance" }
      benchmark_result { build(:benchmark_result, score: scored, score_raw: scored+5, score_deduction: 5, marked_at: marked_at, team: team) }
    end

    trait :passed do
      status { :finished }
      instance_name { "instance" }
      benchmark_result { build(:benchmark_result, :finished, score: scored, score_raw: scored+5, score_deduction: 5, marked_at: marked_at, team: team) }
    end

    trait :failed do
      status { :finished }
      instance_name { "instance" }
      benchmark_result { build(:benchmark_result, :failed, score: scored, score_raw: scored+5, score_deduction: 5, marked_at: marked_at, team: team) }
    end

    trait :errored do
      status { :errored }
      instance_name { "instance" }
      benchmark_result { build(:benchmark_result, :errored, score: scored, score_raw: scored+5, score_deduction: 5, marked_at: marked_at, team: team) }
    end

    trait :signaled do
      status { :errored }
      instance_name { "instance" }
      benchmark_result { build(:benchmark_result, :signaled, score: scored, score_raw: scored+5, score_deduction: 5, marked_at: marked_at, team: team) }
    end

    trait :cancelled do
      status { :cancelled }
    end
  end
end
