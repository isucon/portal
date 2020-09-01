class SyncSshKeysOfAllContestantsJob < ApplicationJob
  self.log_arguments = false
  def perform(access_token)
    Contestant.find_in_batches do |batch|
      batch.each do |c|
        SyncSshKeysOfContestantJob.perform_now(c, access_token)
      end
    end
  end
end
