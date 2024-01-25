Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'
  
  resources :posts
  devise_for :users
  get '/posts', to: 'posts#index', defaults: { format: :json }


  namespace :api do
    post 'user/register', to: 'user#register'
    post 'user/login', to: 'user#login'
    post 'post/create', to: 'post#create'
    post 'comment/create', to: 'comment#create'
  end

  # Remove the line below if not needed
  # resources :users, only: [:create, :index]

  get 'up' => 'rails/health#show', as: :rails_health_check
end

