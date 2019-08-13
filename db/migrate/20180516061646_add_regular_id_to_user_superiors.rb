# frozen_string_literal: true

# db/migrate/20180516061646_add_regular_id_to_user_superiors.rb
class AddRegularIdToUserSuperiors < ActiveRecord::Migration[5.2]
  def change
    add_column :user_superiors, :regular_id, :bigint, index: true
    add_foreign_key :user_superiors, :users, column: :regular_id
  end
end
