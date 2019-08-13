# frozen_string_literal: true

class AddLeaveCreditsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :leave_credits, :integer
  end
end
