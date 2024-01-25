# app/controllers/api/user_controller.rb
class Api::UserController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def register
      user = User.new(user_params)
  
      if user.save
        render json: { message: 'User registered successfully!' }
      else
        render json: { error: 'Failed to register user.' }, status: :unprocessable_entity
      end
    end
  
    def login
      user = User.find_by(username: params[:username])
  
      if user && user.authenticate(params[:password])
        render json: { message: 'Login successful!' }
      else
        render json: { error: 'Invalid username or password.' }, status: :unauthorized
      end
    end
  
    private
  
    def user_params
      params.require(:user).permit(:username, :password)
    end
  end
  