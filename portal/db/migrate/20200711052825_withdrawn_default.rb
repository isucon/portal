class WithdrawnDefault < ActiveRecord::Migration[6.0]
  def change
    change_column :teams, :withdrawn, :boolean, default: false
    change_column_null :teams, :withdrawn, false, false
  end
end
