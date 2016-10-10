Rails.application.routes.draw do
  root 'members#index'

  resources :members, only: [:index]
end
