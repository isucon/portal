class AddStudentToTeams < ActiveRecord::Migration[6.0]
  def change
    add_column :teams, :student, :boolean

    Team.reset_column_information
    Team.find_in_batches do |batch|
      batch.each do |team|
        team.update_student_status
        team.save!
      end
    end

    change_column_null :teams, :student, false
  end
end
