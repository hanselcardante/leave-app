# frozen_string_literal: true

# app/models/user_role.rb
class UserRole < ApplicationRecord
  belongs_to :user
  belongs_to :user_role_type
end
