# frozen_string_literal: true

# db/migrate/20180525064411_add_devise_columns_to_user.rb
class AddDeviseColumnsToUser < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      # Trackable
      t.integer  :sign_in_count, default: 0
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string   :current_sign_in_ip
      t.string   :last_sign_in_ip

      ## Encryptable
      #  t.string :password_salt
      #
      # t.string :encrypted_password, null: false, default: ""

      ## Confirmable
      #         t.string   :confirmation_token
      #         t.datetime :confirmed_at
      #         t.datetime :confirmation_sent_at
      # t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, :default => 0 # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at

      # Token authenticatable
      #  t.string :authentication_token

      ## Invitable
      # t.string :invitation_token
    end
  end
end
