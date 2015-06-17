class Comment < ActiveRecord::Base
  attr_accessible :text, :post
  belongs_to :post
end
