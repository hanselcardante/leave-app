# frozen_string_literal: true

# app/serializers/leave_comment_serializer.rb
class LeaveCommentSerializer < ActiveModel::Serializer
  attributes :comment_text, :created_at, :user_id, :user
  
  def user
    return User.where('id = ?', object.user_id.to_i).first
  end
  
  def created_at
    object.created_at.strftime('%_m/%e/%Y')
  end
end
