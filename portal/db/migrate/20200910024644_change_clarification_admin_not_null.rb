class ChangeClarificationAdminNotNull < ActiveRecord::Migration[6.0]
  def change
    change_column :clarifications, :admin, :boolean, default: false
    change_column_null :clarifications, :admin, false, false
  end
end

