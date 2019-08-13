# frozen_string_literal: true

# db/migrate/20180515064622_add_user_role_type_ref_to_user_roles.rb
class AddUserRoleTypeRefToUserRoles < ActiveRecord::Migration[5.2]
  def change
    add_reference :user_roles, :user_role_type, foreign_key: true
  end
end
