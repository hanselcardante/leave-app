class RemoveStatusFromLeaves < ActiveRecord::Migration[5.2]
  def change
  	remove_column :leaves, :status, :string
  end
end
