# frozen_string_literal: true

# app/models/user_role_type.rb
class UserRoleType < ApplicationRecord
  has_many :user_roles
  has_many :users, through: :user_roles
end
