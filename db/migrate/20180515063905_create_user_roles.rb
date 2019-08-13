# frozen_string_literal: true

# db/migrate/20180515063905_create_user_roles.rb
class CreateUserRoles < ActiveRecord::Migration[5.2]
  def change
    create_table :user_roles, &:timestamps
  end
end
