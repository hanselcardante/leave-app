# frozen_string_literal: true

# db/migrate/20180515074934_add_user_ref_to_leave_comments.rb
class AddUserRefToLeaveComments < ActiveRecord::Migration[5.2]
  def change
    add_reference :leave_comments, :user, foreign_key: true
  end
end
