class PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]
  
    # GET /posts
    def index
      @posts = Post.all
      render json: @posts

      respond_to do |format|
        format.html { render 'index.html.erb' }
        format.json { render json: @posts }
        format.xml { render xml: @posts }
    end
  
    # POST /posts
    def create
      @post = Post.new(post_params)
  
      if @post.save
        render json: @post, status: :created
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    # GET /posts/:id
    def show
      render json: @post
    end
  
    # PATCH/PUT /posts/:id
    def update
      if @post.update(post_params)
        render json: @post
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /posts/:id
    def destroy
      @post.destroy
      head :no_content
    end
  
    private
  
    def set_post
      @post = Post.find(params[:id])
    end
  
    def post_params
      params.require(:post).permit(:title, :content, :tags)
    end
  end
  