# frozen_string_literal: true

# app/models/leave_comment.rb
class LeaveComment < ApplicationRecord
  belongs_to :leave
  belongs_to :user
end
