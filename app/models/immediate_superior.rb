# frozen_string_literal: true

# app/models/immediate_superior.rb
class ImmediateSuperior < User
  # has_many :user_superiors, foreign_key: 'superior_id'
  # has_many :employees, class_name: 'Employee', through: :user_superiors

  def approve; end
end
