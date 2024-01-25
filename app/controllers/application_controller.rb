class ApplicationController < ActionController::API
    before_action :authorize_request
  
    private
  
    def authorize_request
      header = request.headers['Authorization']
      @decoded_token = JsonWebToken.decode(header.split(' ').last) if header
    rescue JWT::DecodeError
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end