# frozen_string_literal: true

module Api
  # app/controllers/api/sessions_controller.rb
  class SessionsController < Devise::SessionsController
    protect_from_forgery with: :null_session
    respond_to :json

    skip_before_action :verify_authenticity_token
    # skip_before_filter :require_login
    # before_action :authenticate_user!
    # acts_as_token_authentication_handler_for User, fallback_to_devise: false
    prepend_before_action :require_no_authentication, only: %(new cancel)
    prepend_before_action :allow_params_authentication!, only: :create
    prepend_before_action :verify_signed_out_user, only: :destroy
    prepend_before_action(only: %i[create destroy]) { request.env['devise.skip_timeout'] = true }

    def new
      redirect_to '/'
    end

    def create
      user = User.where(email: params[:email]).first

      if !user.nil? && user.valid_password?(params[:password])
        sign_in(user)
        render json: UserSerializer.new(user, root: false).to_json, status: :created
      else
        head(:unauthorized)
      end
    end

    # DELETE /resource/sign_out
    def destroy
      Devise.sign_out_all_scopes ? sign_out : sign_out('users')
      render json: { message: 'ok' }, status: :created
      # set_flash_message! :notice, :signed_out if signed_out
      # yield if block_given?
      # respond_to_on_destroy
      # if signed_out
      #   # redirect_to '/'
      #   render 'client/index'
      # end
    end

    private

    def sign_in_params
      params.permit(:user, :email, :password, :id)
    end
  end
end
