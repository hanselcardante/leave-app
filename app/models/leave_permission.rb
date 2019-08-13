# frozen_string_literal: true

# app/models/leave_permission.rb
class LeavePermission < ApplicationRecord
  belongs_to :user
  belongs_to :leave

  after_update :update_leave_credits_if_any, :notify_user

  PENDING = 0
  APPROVED = 1
  DENIED = 2

  private
    def update_leave_credits_if_any
      return false unless status.eql?(LeavePermission::APPROVED)
      if ([LeaveType::VACATION, LeaveType::SICK, LeaveType::PERSONAL].include?(leave.leave_type.code))
        credits_used = leave.days
        leave_credit = LeaveCredit.where(
          'user_id = ? and leave_type_id = ?',
          leave.user_id, leave.leave_type_id).first
        leave_credit.update_attribute(:value, leave_credit.value - credits_used.to_i)
      end
    end

    def notify_user
      notification = Notification.new
      notification.text = 'Your leave request has been ' + (status.eql?(LeavePermission::APPROVED) ? 'approved.' : 'denied.')
      notification.trackable_id = leave_id
      notification.trackable_type = 'Leave'
      notification.status = 'unread'
      notification.recipient_id = leave.user_id
      notification.sender_id = user_id
      notification.save!
    end
end
