class DropUserUsedCreditsTable < ActiveRecord::Migration[5.2]
  def change
  	drop_table :user_used_credits
  end
end
