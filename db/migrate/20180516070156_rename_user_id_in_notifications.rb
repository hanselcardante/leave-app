# frozen_string_literal: true

# db/migrate/20180516070156_rename_user_id_in_notifications.rb
class RenameUserIdInNotifications < ActiveRecord::Migration[5.2]
  def change
    rename_column :notifications, :user_id, :recipient_id
  end
end
