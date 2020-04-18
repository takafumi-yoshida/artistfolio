class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  protect_from_forgery with: :exception

private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:artistname])
  end

  def after_sign_in_path_for(resource)
    homes_path
  end

  def after_inactive_sign_up_path_for(resource)
    homes_path
  end

end

