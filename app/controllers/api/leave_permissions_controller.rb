# frozen_string_literal: true

module Api
  # app/controllers/api/leaves_controller.rb
  class LeavePermissionsController < ApplicationController
    def index
      permissions = Employee.find(params[:id]).leave_permissions.where(status: LeavePermission::PENDING)
      render json:  ActiveModel::Serializer::
          CollectionSerializer.new(permissions,
                                   each_serializer: LeavePermissionSerializer).to_json,
             status: :ok
    end

    def show
      permission = LeavePermission.find(params[:id])
      render json: LeavePermissionSerializer.new(permission, root: false).to_json,
             status: :ok
    end

    def update
      leave_permission = LeavePermission.find(params[:id])
      leave_permission.status = params[:status]

      if leave_permission.save
        render json: LeavePermissionSerializer.new(leave_permission, root: false).to_json, status: :ok
      else
        render json: {
          status: 'ERROR',
          data: leave_permission.save!
        }, status: :unprocessable_entity
      end
    end
  end
end
