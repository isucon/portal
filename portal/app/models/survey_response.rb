class SurveyResponse < ApplicationRecord
  belongs_to :team
  belongs_to :benchmark_job
end
