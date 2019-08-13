# frozen_string_literal: true

# Migration file
class AddUserRefToLeavePermissions < ActiveRecord::Migration[5.2]
  def change
    add_reference :leave_permissions, :user, foreign_key: true
  end
end
