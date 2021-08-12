class AddAvailabilityZoneToTeam < ActiveRecord::Migration[6.0]
  def change
    add_column :teams, :availability_zone, :string
  end
end
