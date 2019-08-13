# frozen_string_literal: true

# db/migrate/20180516065420_add_sender_id_to_notifications.rb
class AddSenderIdToNotifications < ActiveRecord::Migration[5.2]
  def change
    add_column :notifications, :sender_id, :bigint, index: true
    add_foreign_key :notifications, :users, column: :sender_id
  end
end
