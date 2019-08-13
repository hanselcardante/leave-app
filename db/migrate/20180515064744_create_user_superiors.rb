# frozen_string_literal: true

# db/migrate/20180515064744_create_user_superiors.rb
class CreateUserSuperiors < ActiveRecord::Migration[5.2]
  def change
    create_table :user_superiors, &:timestamps
  end
end
