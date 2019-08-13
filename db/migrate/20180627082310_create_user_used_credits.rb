class CreateUserUsedCredits < ActiveRecord::Migration[5.2]
  def change
    create_table :user_used_credits do |t|
    	t.integer :value
    	t.integer :dividing_factor
    	
      t.timestamps
    end
  end
end
