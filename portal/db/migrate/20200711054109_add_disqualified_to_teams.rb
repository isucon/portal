class AddDisqualifiedToTeams < ActiveRecord::Migration[6.0]
  def change
    add_column :teams, :disqualified, :boolean, null: false, default: false
  end
end
