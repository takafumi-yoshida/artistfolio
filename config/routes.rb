Rails.application.routes.draw do
  devise_for :users
  root "homes#top"
  resources :homes, only: [:index]
  resources :users, only:[:show, :edit, :update]
end
