class ForumThreadsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
  
    def index
        if params[:search]
          @forum_threads = ForumThread.search_by_title_and_content(params[:search])
        else
          @forum_threads = ForumThread.all
        end
      end

    
    def show
      @forum_thread = ForumThread.find(params[:id])
      @comment = Comment.new
    end
  
    def new
      @forum_thread = current_user.forum_threads.build
    end
  
    def create
      @forum_thread = current_user.forum_threads.build(forum_thread_params)
      if @forum_thread.save
        redirect_to @forum_thread, notice: 'Forum thread was successfully created.'
      else
        render :new
      end
    end
  
    def edit
      @forum_thread = current_user.forum_threads.find(params[:id])
    end
  
    def update
      @forum_thread = current_user.forum_threads.find(params[:id])
      if @forum_thread.update(forum_thread_params)
        redirect_to @forum_thread, notice: 'Forum thread was successfully updated.'
      else
        render :edit
      end
    end
  
    def destroy
      @forum_thread = current_user.forum_threads.find(params[:id])
      @forum_thread.destroy
      redirect_to forum_threads_url, notice: 'Forum thread was successfully destroyed.'
    end
  
    private

    def forum_thread_params
        params.require(:forum_thread).permit(:title, :content, tag_ids: [])
    end
  end
  