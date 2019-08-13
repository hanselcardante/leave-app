# frozen_string_literal: true

# db/migrate/20180515072511_add_user_ref_to_notifications.rb
class AddUserRefToNotifications < ActiveRecord::Migration[5.2]
  def change
    add_reference :notifications, :user, foreign_key: true
  end
end
