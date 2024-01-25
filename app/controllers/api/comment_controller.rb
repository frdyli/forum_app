# app/controllers/api/comment_controller.rb
class Api::CommentController < ApplicationController
    before_action :authenticate_user
  
    def create
      post = Post.find(params[:post_id])
      comment = post.comments.build(comment_params.merge(user: current_user))
  
      if comment.save
        render json: { message: 'Comment added successfully!' }
      else
        render json: { error: 'Failed to add comment.' }, status: :unprocessable_entity
      end
    end
  
    private
  
    def comment_params
      params.require(:comment).permit(:text)
    end
  end
  