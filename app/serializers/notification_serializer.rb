# frozen_string_literal: true

# app/serializers/user_role_type_serializer.rb
class NotificationSerializer < ActiveModel::Serializer
  attributes :id, :text, :trackable_id, :trackable_type, :status, :recipient_id, :sender_id
end
