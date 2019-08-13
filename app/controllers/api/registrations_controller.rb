# frozen_string_literal: true

module Api
  # app/controllers/api/sessions_controller.rb
  class RegistrationsController < Devise::SessionsController
    protect_from_forgery with: :exception
    respond_to :json
    skip_before_action :verify_authenticity_token
    prepend_before_action :require_no_authentication, only: [:new, :cancel]

    def new
      super
    end

    def create
      # add custom create logic here
      user = User.create(user_params)
      puts user.sex
      if user.save
        sign_in(user)
        render json: UserSerializer.new(user, root: false).to_json, status: :created
      else
        render json: { status: 'ERROR',
                       message: 'Creation failed',
                       data: user.errors.messages },
               status: :unprocessable_entity
      end
    end

    def get
      user = User.pluck('email')

      render json: { values: user }
    end

    def update
      super
    end

    private

    def user_params
      params.require(:registration).permit(:first_name, :last_name, :sex,
                                           :civil_status, :password, :email)
    end
  end
end
