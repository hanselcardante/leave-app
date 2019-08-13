# frozen_string_literal: true

module Api
  # app/controllers/api/users_controller.rb
  class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
      users = User.order('created_at DESC')
      render json: {
        status: 'SUCCESS',
        data: users
      }, status: :ok
    end

    def show
      user = User.find(params[:id])
      render json: {
        status: 'SUCCESS',
        data: user
      }, status: :ok
    end

    def create
      user = User.new(user_params)

      if user.save
        render json: {
          status: 'SUCCESS',
          data: user
        }, status: :ok
      else
        render json: {
          status: 'ERROR',
          data: user.save!
        }, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :password, :email, :employment_date)
    end
  end
end
