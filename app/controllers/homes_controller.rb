class HomesController < ApplicationController
    before_action :move_to_top, only: [:top]
  def top
    
  end

  def index
    @new_users = User.first(10)
  end

  private

  def move_to_top
    redirect_to action:"index" if user_signed_in?
  end

end
