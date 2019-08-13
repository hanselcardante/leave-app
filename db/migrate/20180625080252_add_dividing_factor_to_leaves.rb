class AddDividingFactorToLeaves < ActiveRecord::Migration[5.2]
  def change
    add_column :leaves, :dividing_factor, :integer
  end
end
