# frozen_string_literal: true

module Api
  # app/controllers/api/leaves_controller.rb
  class LeavesController < ApplicationController
    respond_to :json
    def index
      leaves = Employee.find(params[:id]).leaves
      render json:  ActiveModel::Serializer::
              CollectionSerializer.new(leaves,
                                       each_serializer: LeaveSerializer).to_json,
             status: :ok
    end

    def create
      # User
      requester = User.where(id: params[:data][:id]).first

      # Check if application is valid
      leave_type_id = LeaveType.where(code: params[:data][:leave_type]).first.id
      samePreviousLeave = Leave.where(start_date: params[:data][:start]).where(end_date: params[:data][:end])
                      .where(leave_type_id: leave_type_id).where(user_id: params[:data][:id]).first

      if samePreviousLeave
        prevLeavePerm = LeavePermission.where(leave_id: samePreviousLeave.id).first
        if prevLeavePerm.status == 0 || prevLeavePerm.status == 1
          render json: { status: 'FAILED' }, status: :forbidden
        else
          fire(requester)
        end
      else
        fire(requester)
      end
    end

    def fire(requester)
      # Get superiors of employee

      # New Leave
      leave = Leave.new
      leave.start_date = params[:data][:start]
      leave.end_date = params[:data][:end]
      leave.reason = params[:data][:reason]
      leave.num_of_halfdays = params[:data][:half_days]
      leave.immediate_relationship = params[:data][:relation]
      leave.doctor_note = params[:data][:doctor_note]

      leave_type = LeaveType.where(code: params[:data][:leave_type]).first
      leave.leave_type_id = leave_type.id
      leave.user_id = requester.id

      leave.save!

      # New Leave Permission
      permission = LeavePermission.new
      permission.status = 0
      permission.leave_id = leave.id
      permission.user_id =  params[:data][:superior]
      permission.save!

      # New Notification
      notification = Notification.new
      notification.text = 'A leave request has been submitted by ' + requester.first_name
      notification.trackable_id = leave.id
      notification.trackable_type = 'Leave'
      notification.status = 'unread'
      notification.recipient_id = params[:data][:superior]
      notification.sender_id = requester.id
      notification.save!
      render json: { status: 'SUCCESS', leave: leave, user: requester }, status: :ok
    end

    def show
      leave = Leave.find(params[:id])
      render json: LeaveSerializer.new(leave, root: false).to_json,
             status: :ok
    end
    
    def pending
      params.permit(:id)
      leaves = Leave.where()
      render json: {
        data: leaves
      }, status: :ok
    end
  end
end
