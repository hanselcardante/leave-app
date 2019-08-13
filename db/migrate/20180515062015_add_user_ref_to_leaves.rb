# frozen_string_literal: true

# db/migrate/20180515062015_add_user_ref_to_leaves.rb
class AddUserRefToLeaves < ActiveRecord::Migration[5.2]
  def change
    add_reference :leaves, :user, foreign_key: true
  end
end
