class RemoveLeaveCreditsFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :leave_credits, :string
  end
end
