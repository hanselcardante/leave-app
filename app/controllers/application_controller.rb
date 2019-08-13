# frozen_string_literal: true

# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  def index; end
end
