# frozen_string_literal: true

# db/migrate/20180515072359_create_notifications.rb
class CreateNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.text :text
      t.integer :trackable_id
      t.string :trackable_type
      t.string :status

      t.timestamps
    end
  end
end
