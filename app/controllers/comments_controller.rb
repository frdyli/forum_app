class CommentsController < ApplicationController
    before_action :authenticate_user!
  
    def create
      @forum_thread = ForumThread.find(params[:forum_thread_id])
      @comment = @forum_thread.comments.build(comment_params)
      @comment.user = current_user
  
      if @comment.save
        redirect_to @forum_thread, notice: 'Comment was successfully created.'
      else
        render 'forum_threads/show'
      end
    end
  
    private
  
    def comment_params
      params.require(:comment).permit(:content)
    end
  end
  