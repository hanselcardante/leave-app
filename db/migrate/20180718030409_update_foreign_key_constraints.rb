class UpdateForeignKeyConstraints < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :leaves, :users
    add_foreign_key :leaves, :users, column: :user_id,
                    on_delete: :cascade, on_update: :cascade, :unique => true

    remove_foreign_key :leaves, :leave_types
    add_foreign_key :leaves, :leave_types, column: :leave_type_id,
                    on_delete: :cascade, on_update: :cascade, :unique => true

    remove_foreign_key :leave_comments, :users
    add_foreign_key :leave_comments, :users, column: :user_id,
                    on_delete: :cascade, on_update: :cascade, :unique => true

    remove_foreign_key :leave_comments, :leaves
    add_foreign_key :leave_comments, :leaves, column: :leave_id,
                    on_delete: :cascade, on_update: :cascade, :unique => true

    remove_foreign_key :leave_permissions, :leaves
    add_foreign_key :leave_permissions, :leaves, column: :leave_id,
                    on_delete: :cascade, on_update: :cascade, :unique => true

    remove_foreign_key :leave_permissions, :users
    add_foreign_key :leave_permissions, :users, column: :user_id,
                    on_delete: :cascade, on_update: :cascade, :unique => true

    remove_foreign_key :notifications, :users
    add_foreign_key :notifications, :users, column: :recipient_id,
                    on_delete: :cascade, on_update: :cascade, :unique => true

    remove_foreign_key :notifications, :users
    add_foreign_key :notifications, :users, column: :sender_id,
                    on_delete: :cascade, on_update: :cascade, :unique => true

    remove_foreign_key :user_roles, :users
    add_foreign_key :user_roles, :users, column: :user_id,
                    on_delete: :cascade, on_update: :cascade, :unique => true

    remove_foreign_key :user_roles, :user_role_types
    add_foreign_key :user_roles, :user_role_types, column: :user_role_type_id,
                    on_delete: :cascade, on_update: :cascade, :unique => true

    remove_foreign_key :user_superiors, :users
    add_foreign_key :user_superiors, :users, column: :superior_id,
                    on_delete: :cascade, on_update: :cascade, :unique => true

    remove_foreign_key :user_superiors, :users
    add_foreign_key :user_superiors, :users, column: :regular_id,
                    on_delete: :cascade, on_update: :cascade, :unique => true
  end
end
