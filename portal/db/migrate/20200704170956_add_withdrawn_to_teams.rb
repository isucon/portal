class AddWithdrawnToTeams < ActiveRecord::Migration[6.0]
  def change
    remove_column :contestants, :withdrawn
    add_column :teams, :withdrawn, :boolean
  end
end
