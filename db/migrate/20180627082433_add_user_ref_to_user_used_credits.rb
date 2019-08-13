class AddUserRefToUserUsedCredits < ActiveRecord::Migration[5.2]
  def change
  	add_reference :user_used_credits, :user, foreign_key: true
  end
end
