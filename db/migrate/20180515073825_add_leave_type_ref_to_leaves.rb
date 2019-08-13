# frozen_string_literal: true

# db/migrate/20180515073825_add_leave_type_ref_to_leaves.rb
class AddLeaveTypeRefToLeaves < ActiveRecord::Migration[5.2]
  def change
    add_reference :leaves, :leave_type, foreign_key: true
  end
end
