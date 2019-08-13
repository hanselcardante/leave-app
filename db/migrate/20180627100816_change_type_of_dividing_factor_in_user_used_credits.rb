class ChangeTypeOfDividingFactorInUserUsedCredits < ActiveRecord::Migration[5.2]
  def change
  	change_column :user_used_credits, :dividing_factor, :float
  end
end
