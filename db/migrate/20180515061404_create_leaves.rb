# frozen_string_literal: true

# db/migrate/20180515061404_create_leaves.rb
class CreateLeaves < ActiveRecord::Migration[5.2]
  def change
    create_table :leaves do |t|
      t.date :start_date
      t.date :end_date
      t.text :reason
      t.integer :num_of_halfdays
      t.boolean :immediate_relationship
      t.boolean :doctor_note

      t.timestamps
    end
  end
end
