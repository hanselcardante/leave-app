# frozen_string_literal: true

# db/migrate/20180515071609_add_user_ref_to_user_superiors.rb
class AddUserRefToUserSuperiors < ActiveRecord::Migration[5.2]
  def change
    add_reference :user_superiors, :user, foreign_key: true
  end
end
