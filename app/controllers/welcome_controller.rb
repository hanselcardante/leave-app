# frozen_string_literal: true

# app/controllers/welcome_controller.rb
class WelcomeController < ApplicationController
  def index; end

  def post_params
    params.require(:user).permit(:title, :content)
  end
end
