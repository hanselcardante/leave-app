# frozen_string_literal: true

# db/migrate/20180516065948_rename_user_id_in_user_superiors.rb
class RenameUserIdInUserSuperiors < ActiveRecord::Migration[5.2]
  def change
    rename_column :user_superiors, :user_id, :superior_id
  end
end
