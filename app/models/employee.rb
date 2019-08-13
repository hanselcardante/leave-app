# frozen_string_literal: true

# app/models/employee.rb
class Employee < User
  # has_many :user_superiors, foreign_key: 'regular_id'
  # has_many :immediate_superiors, class_name: 'ImmediateSuperior', through: :user_superiors

  def leave_credits
    return nil if employment_date.nil?
    leave_credits = {}
    leave_credits[LeaveType::VACATION] = credits_for(LeaveType::VACATION)
    leave_credits[LeaveType::SICK] = credits_for(LeaveType::SICK)
    leave_credits[LeaveType::PERSONAL] = credits_for(LeaveType::PERSONAL)
    leave_credits
  end

  def credits_for(leave_type)
    leave_type_id = LeaveType.where('code = ?', leave_type).first.id
    credits = LeaveCredit.where('user_id = ? and leave_type_id = ?', id, leave_type_id).first
    if (credits.last_increment.nil?)
      credits.update_attribute(:last_increment, employment_date)
    end
    credits.calculate_value
    return credits.value
  end

  def year_started
    employment_date.year
  end

  def month_day_started
    Date.parse(employment_date.strftime('%m-%d'))
  end
end
