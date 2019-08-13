class CreateLeaveCredits < ActiveRecord::Migration[5.2]
  def change
    create_table :leave_credits do |t|
      t.integer :value
      t.date :last_increment
      t.float :dividing_factor

      t.timestamps
    end
  end
end
