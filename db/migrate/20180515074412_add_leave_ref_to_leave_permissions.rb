# frozen_string_literal: true

# db/migrate/20180515074412_add_leave_ref_to_leave_permissions.rb
class AddLeaveRefToLeavePermissions < ActiveRecord::Migration[5.2]
  def change
    add_reference :leave_permissions, :leave, foreign_key: true
  end
end
