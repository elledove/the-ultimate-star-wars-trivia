Rails.application.routes.draw do
  resources :answers
  resources :themes, only: :index
  resources :questions, only: :index
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
