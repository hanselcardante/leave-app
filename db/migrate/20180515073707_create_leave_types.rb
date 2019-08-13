# frozen_string_literal: true

# db/migrate/20180515073707_create_leave_types.rb
class CreateLeaveTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :leave_types do |t|
      t.string :name
      t.text :description
      t.string :code

      t.timestamps
    end
  end
end
