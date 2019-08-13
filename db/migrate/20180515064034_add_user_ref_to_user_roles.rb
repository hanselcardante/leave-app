# frozen_string_literal: true

# db/migrate/20180515064034_add_user_ref_to_user_roles.rb
class AddUserRefToUserRoles < ActiveRecord::Migration[5.2]
  def change
    add_reference :user_roles, :user, foreign_key: true
  end
end
