class AddLeaveTypeRefToLeaveCredits < ActiveRecord::Migration[5.2]
  def change
  	add_reference :leave_credits, :leave_type, foreign_key: true
  end
end
