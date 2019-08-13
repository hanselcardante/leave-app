# frozen_string_literal: true

# app/serializers/leave_permission_serializer.rb
class LeavePermissionSerializer < ActiveModel::Serializer
  attributes :id, :status, :user_id, :leave_id, :created_at, :filed_by, :leave_type, :days_off
  has_one :leave, serializer: LeaveSerializer

  def filed_by
    object.leave.user.first_name + ' ' + object.leave.user.last_name
  end

  def leave_type
    object.leave.leave_type.name
  end

  def created_at
    object.created_at.strftime('%_m/%e/%Y')
  end

  def days_off
    object.leave.days
  end
end
