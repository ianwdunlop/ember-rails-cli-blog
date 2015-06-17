class Post < ActiveRecord::Base
  attr_accessible :title
  has_many :comments

  def as_json(options={})
    { :id => self.id, :title => self.title, :comments =>self.comments.collect{|comment| comment.id} }
  end
end
