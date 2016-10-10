Rails.application.routes.draw do
  root 'members#index'

  resources :index, only: [:index]
end
