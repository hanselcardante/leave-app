class ChangeLeavePermissions < ActiveRecord::Migration[5.2]
  def change
    change_column :leave_permissions, :status, :integer
  end
end
