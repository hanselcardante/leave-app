# frozen_string_literal: true

# Controller for Main
class MainController < ApplicationController
  before_action :authenticate_user!, except: [:client]

  def index
    puts user_signed_in?
  end

  def client
    render 'client/index'
  end
end
