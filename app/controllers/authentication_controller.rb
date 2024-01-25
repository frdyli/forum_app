class AuthenticationController < ApplicationController
  private

  def render_login_success(user)
    render json: { token: user.generate_auth_token }
  end
end
