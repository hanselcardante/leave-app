# frozen_string_literal: true

# app/models/leave.rb
class Leave < ApplicationRecord
  has_one :leave_permission
  has_one :leave_comment
  belongs_to :leave_type
  belongs_to :user

  after_update :update_leave_credits_if_any, :notify_user

  SATURDAY = 6
  SUNDAY = 7

  def days
    weekends = [SATURDAY, SUNDAY]

    dates = (start_date..end_date).to_a
    dates.select! {|date| !weekends.include?(date.cwday)}

    # For the case of dates falling to holidays, holidays are stored in the database to serve as
    # basis of comparison. The code below works for checking if a leave falls on a holiday.

    # holidays = Holiday.all
    # dates.select! {|date| !holidays.include?(date)}

    dates.length - (num_of_halfdays ? num_of_halfdays : 0) * 0.5
  end
end
