class ChangeLeaveCreditsToBeStringInUsers < ActiveRecord::Migration[5.2]
  def change
  	change_column :users, :leave_credits, :string
  end
end
