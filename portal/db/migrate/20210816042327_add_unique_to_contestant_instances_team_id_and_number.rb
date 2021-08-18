class AddUniqueToContestantInstancesTeamIdAndNumber < ActiveRecord::Migration[6.0]
  def change
    remove_index :contestant_instances, [:team_id, :number]
    add_index :contestant_instances, [:team_id, :number], unique: true
  end
end
