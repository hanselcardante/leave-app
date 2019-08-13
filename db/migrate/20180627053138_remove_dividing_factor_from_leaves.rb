class RemoveDividingFactorFromLeaves < ActiveRecord::Migration[5.2]
  def change
    remove_column :leaves, :dividing_factor, :integer
  end
end
