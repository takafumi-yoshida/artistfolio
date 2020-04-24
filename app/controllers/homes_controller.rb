class HomesController < ApplicationController
    before_action :move_to_top, only: [:top]
  def top
    
  end

  def index
    @randomGalleries = Gallery.order("RAND()").limit(30).includes(:user)
    @new_users = User.limit(10).order(id: :desc)
  end

  private

  def move_to_top
    redirect_to action:"index" if user_signed_in?
  end

end
