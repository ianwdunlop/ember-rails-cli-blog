class PostsController < ApplicationController

  def index
    @posts = Post.all

    respond_to do |format|
      format.html { render 'application/index' }
      format.json { render :json => { :posts => @posts.as_json } }
    end
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    @post = Post.find(params[:id])
  
    respond_to do |format|
      format.html { render 'application/index' }
      format.json { render :json => { :post => @post.as_json } }
    end
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new({ :title => params[:post][:title] })
  
    respond_to do |format|
      if @post.save
        format.json { render :json => { :post => @post.as_json}, :status => :created, :location => @post }
      else
        format.json { render :json => @post.errors, :status => :unprocessable_entity }
      end
    end
  end
end
