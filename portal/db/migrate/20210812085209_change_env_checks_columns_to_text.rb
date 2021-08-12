class ChangeEnvChecksColumnsToText < ActiveRecord::Migration[6.0]
  def change
    change_column :env_checks, :message, :text
    change_column :env_checks, :admin_message, :text
    change_column :env_checks, :raw_data, :text
  end
end
