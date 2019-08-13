# frozen_string_literal: true

# db/migrate/20180527133811_add_authentication_token_to_users.rb
class AddAuthenticationTokenToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :authentication_token, :string, limit: 30
    add_index :users, :authentication_token, unique: true
  end
end
