FactoryBot.define do
  factory :benchmark_result do
    team
    benchmark_job
    marked_at { Time.zone.now }
    finished { false }

    trait :scored do
      score { 100 }
      score_raw { 150 }
      score_deduction { 50 }
    end

    trait :finished do
      finished { true }
      passed { true }
      reason { nil }
      stdout { "stdout" }
      stderr { "stderr" }
      exit_status { 0 }
      exit_signal { nil }
    end

    trait :failed do
      finished { true }
      passed { false }
      reason { "reason" }
      stdout { "stdout" }
      stderr { "stderr" }
      exit_status { 0 }
      exit_signal { nil }
    end

    trait :errored do
      finished { true }
      exit_status { 1 }
      exit_signal { nil }
      stdout { "stdout" }
      stderr { "stderr" }
    end

    trait :signaled do
      finished { true }
      exit_status { nil }
      exit_signal { 7 }
      stdout { "stdout" }
      stderr { "stderr" }
    end
  end
end
