# frozen_string_literal: true

# app/serializers/leave_type_serializer.rb
class LeaveTypeSerializer < ActiveModel::Serializer
  attributes :name, :code
end
