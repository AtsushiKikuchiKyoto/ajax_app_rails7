class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  def new
  end

  def create
    post = Post.create(content: params[:content])
    render json:{ post: post }
    
    # Post.create(content: params[:content])
    # redirect_to action: :index
  end
end
