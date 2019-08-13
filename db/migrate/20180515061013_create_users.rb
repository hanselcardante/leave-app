# frozen_string_literal: true

# db/migrate/20180515061013_create_users.rb
class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: '', unique: true
      t.string :encrypted_password, null: false, default: ''
      t.string :first_name
      t.string :last_name
      t.string :sex
      t.string :civil_status
      t.date :employment_date

      t.timestamps
    end
  end
end
