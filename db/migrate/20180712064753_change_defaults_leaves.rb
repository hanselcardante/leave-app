class ChangeDefaultsLeaves < ActiveRecord::Migration[5.2]
  def change
    change_column :leaves, :status, :string, default: 'PENDING'
    change_column :leaves, :immediate_relationship, :boolean, default: false
    change_column :leaves, :doctor_note, :boolean, default: false
  end
end
