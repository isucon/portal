class AddAdminToClarifications < ActiveRecord::Migration[6.0]
  def change
    add_column :clarifications, :admin, :boolean
  end
end
