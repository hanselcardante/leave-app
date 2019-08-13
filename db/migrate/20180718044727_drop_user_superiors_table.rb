class DropUserSuperiorsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :user_superiors
  end
end
