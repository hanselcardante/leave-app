# frozen_string_literal: true

# app/serializers/leave_serializer.rb
class LeaveSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :reason,
             :immediate_relationship, :doctor_note, :created_at,
             :status, :num_of_halfdays, :days_off
           
  has_one :leave_comment, serializer: LeaveCommentSerializer
  has_one :leave_type, serializer: LeaveTypeSerializer
  has_one :superior

  def created_at
    object.created_at.strftime('%_m/%e/%Y')
  end

  def start_date
    object.start_date.strftime('%_m/%e/%Y')
  end

  def end_date
    object.end_date.strftime('%_m/%e/%Y')
  end

  def status
    leave_permission = object.leave_permission
    return 'PENDING' if leave_permission.nil?
    return 'PENDING' if leave_permission.status.eql?(LeavePermission::PENDING)
    if (leave_permission.status.eql?(LeavePermission::APPROVED))
      return 'APPROVED'
    end
    return 'DENIED'
  end

  def superior
    object.leave_permission.user.first_name+ ' ' +object.leave_permission.user.last_name
  end

  def days_off
    object.days
  end
end
