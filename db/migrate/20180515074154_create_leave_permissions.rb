# frozen_string_literal: true

# db/migrate/20180515074154_create_leave_permissions.rb
class CreateLeavePermissions < ActiveRecord::Migration[5.2]
  def change
    create_table :leave_permissions do |t|
      t.integer :status

      t.timestamps
    end
  end
end
