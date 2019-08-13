# frozen_string_literal: true

# db/migrate/20180515074959_add_leave_ref_to_leave_comments.rb
class AddLeaveRefToLeaveComments < ActiveRecord::Migration[5.2]
  def change
    add_reference :leave_comments, :leave, foreign_key: true
  end
end
