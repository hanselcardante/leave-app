# frozen_string_literal: true

module Api
  # app/controllers/api/leaves_controller.rb
  class NotificationsController < ApplicationController
    def index
      user = current_user
      notifications = Notification.where(recipient_id: user.id, status: 'unread')
                                  .order('created_at DESC')
      render json: ActiveModel::Serializer::CollectionSerializer
        .new(notifications, each_serializer: NotificationSerializer).to_json, status: :ok
    end

    def update
      notification = Notification.find(params[:id])
      notification.update(status: 'read')
    end
  end
end
