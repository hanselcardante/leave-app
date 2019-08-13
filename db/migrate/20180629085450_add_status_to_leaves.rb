# frozen_string_literal: true

# db/migrate/20180629085450_add_status_to_leaves.rb
class AddStatusToLeaves < ActiveRecord::Migration[5.2]
  def change
    add_column :leaves, :status, :string, null: false
  end
end
