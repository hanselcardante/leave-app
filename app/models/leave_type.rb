# frozen_string_literal: true

# app/models/leave_type.rb
class LeaveType < ApplicationRecord
  has_many :leaves

  VACATION = 'VL'
  SICK = 'SL'
  PERSONAL = 'PL'
end
