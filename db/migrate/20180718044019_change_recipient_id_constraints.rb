class ChangeRecipientIdConstraints < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :notifications, column: :recipient_id
    add_foreign_key :notifications, :users, column: :recipient_id,
                    on_delete: :cascade, on_update: :cascade, :unique => true
  end
end
