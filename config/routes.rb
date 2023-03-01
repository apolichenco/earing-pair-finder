Rails.application.routes.draw do
  
  resources :listings, only: [:index, :create, :update, :delete]
  resources :earings, only: [:index, :create]
  resources :users, only: [:index, :create, :show]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/my-listings", to: "listings#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
