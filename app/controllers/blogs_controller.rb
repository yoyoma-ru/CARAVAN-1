class BlogsController < ApplicationController
  def index
  end

  def show
  end

  def new
  	@blog = Blog.new
  end

  def edit
  end

  def create
  	blog = Blog.new(blog_params)
  	blog.sava
  	redirect_to blogs_path
  end
  def blog_params
  	params.require(:blog).premit(:title, :category, :body)
  end
  
end
