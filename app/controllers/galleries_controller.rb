class GalleriesController < ApplicationController
  before_action :get_gallery, only:[:show, :edit, :destroy]

  def new
    @gallery = Gallery.new
    @user = User.find(current_user.id)
  end

  def create
   @gallery = Gallery.new(gallery_params)
   if @gallery.save
    redirect_to user_path(current_user.id)
   else
    render :new
   end
  end

  def show
    @images = @gallery.gallery_images
  end

  def edit
    @user = User.find(current_user.id)
  end

  # def update
  #   @gallery.update(gallery_update_params)
  # end

  def destroy
    @gallery.destroy
  end

  
  private

  def get_gallery
    @gallery = Gallery.find(params[:id])
  end

  def gallery_params
    params.require(:gallery).permit( :title, :explanatory, gallery_images_attributes:[:photo]).merge(user_id: current_user.id)
  end

  # def gallery_update_params
  #   params.require(:gallery).permit( :title, :explanatory, gallery_images_attributes:[:photo, :_destroy, :id]).merge(user_id: current_user.id)
  # end
end
