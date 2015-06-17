class CommentsController < ApplicationController

  # GET /comments
  # GET /comments.json
  def index
    if params[:ids]
      @comments = []
      params[:ids].each do |id|
        @comments.push(Comment.find(id))
      end
    else
      @comments = Comment.all
    end
    respond_to do |format|
      format.html { render 'application/index' }
      format.json { render :json => { :comments => @comments } }
    end
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
    @comment = Comment.find(params[:id])

    respond_to do |format|
      format.html { render 'application/index' }
      format.json { render :json => { :comment => @comment } }
    end
  end

  # POST /comments
  # POST /comments.json
  def create
    @post = Post.find(params[:comment][:post])
    @comment = Comment.create(:text => params[:comment][:text], :post => @post)
  
    respond_to do |format|
      if @comment.save
        #format.html { redirect_to @comment, :notice => 'Comment was successfully created.' }
        format.json { render :json => { :comment => @comment.as_json }, :status => :created, :location => @comment }
      else
        #format.html { render :action => "new" }
        format.json { render :json => @comment.errors, :status => :unprocessable_entity }
      end
    end
  end
end
