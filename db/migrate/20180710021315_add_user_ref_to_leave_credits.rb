class AddUserRefToLeaveCredits < ActiveRecord::Migration[5.2]
  def change
  	add_reference :leave_credits, :user, foreign_key: true
  end
end
