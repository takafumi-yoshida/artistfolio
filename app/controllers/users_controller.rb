class UsersController < ApplicationController
  before_action :user_find, only:[:show, :edit, :update]
  before_action :identity_verification, only: [:edit, :update]
  def show
    @galleries = @user.galleries
    @news = News.new()
    @many_news = News.where(user_id: params[:id]).order(date: :DESC)
  end
  
  def edit
    
  end

  def update
    if @user.update(user_params)
      redirect_to user_path
    else
      render "edit"
    end
  end

  private

  def user_find
    if User.where(id: params[:id]).blank?
      redirect_to root_path
    else
      @user = User.find(params[:id])
    end
  end

  def identity_verification
    redirect_to edit_user_path(current_user.id) unless @user.id === current_user.id
  end
  def user_params
    params.require(:user).permit(:artistname, :realname, :age, :profession, :birthplace, :activityBase, :introduction, :image)
  end
  
end
