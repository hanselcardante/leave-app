# frozen_string_literal: true

# app/serializers/user_role_type_serializer.rb
class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :employment_date, :civil_status, :sex, :authentication_token, :notificationCount
  has_one :user_role_type, serializer: UserRoleTypeSerializer

  def notificationCount
  	object.notificationCount
  end
end
