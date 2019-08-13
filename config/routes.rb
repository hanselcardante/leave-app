# frozen_string_literal: true

Rails.application.routes.draw do
  # get 'welcome/app'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users, :leaves, :leave_comments, :user_superiors, :notifications
  # root 'welcome#app'

  namespace 'api' do
    resources :users
    resources :sessions, only: %i[create destroy]
    resources :leaves
    resources :leave_permissions
    resources :notifications, only: %i[index update]
    resources :employees
    resources :immediate_superiors
    resources :leave_comments
  end

  get '/employee/dashboard', to: 'main#client'
  get '/superior/dashboard', to: 'main#client'
  get '/signup', to: 'main#index'
  get '/employee/requests', to: 'api/leaves#request'
  get '/leaves/pending', to: 'api/leaves#pending'

  root 'main#client'

  devise_for :users,
             controllers: { registrations: 'api/registrations',
                            confirmations: 'confirmations',
                            sessions: 'api/sessions' }
  devise_scope :user do
    post '/login' => 'api/sessions#create'
    post '/signup' => 'api/registrations#create'
    get '/email' => 'api/registrations#get'
  end
end
