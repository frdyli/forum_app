class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :forum_threads
  has_many :comments
  has_secure_password
  def generate_auth_token
    payload = { user_id: id }
    JsonWebToken.encode(payload)
  end     
  
end
