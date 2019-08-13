class AddLeaveTypeRefToUserUsedCredits < ActiveRecord::Migration[5.2]
  def change
  	add_reference :user_used_credits, :leave_type, foreign_key: true
  end
end
