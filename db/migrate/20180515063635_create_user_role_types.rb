# frozen_string_literal: true

# db/migrate/20180515063635_create_user_role_types.rb
class CreateUserRoleTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :user_role_types do |t|
      t.string :role_type

      t.timestamps
    end
  end
end
