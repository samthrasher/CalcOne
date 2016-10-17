Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
