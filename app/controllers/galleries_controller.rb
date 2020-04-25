class GalleriesController < ApplicationController

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
    @gallery = Gallery.find(params[:id])
    @images = @gallery.gallery_images
  end

  def gallery_params
    params.require(:gallery).permit( :title, :explanatory, gallery_images_attributes:[:photo]).merge(user_id: current_user.id)
  end
end
