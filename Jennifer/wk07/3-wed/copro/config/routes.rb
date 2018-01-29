Rails.application.routes.draw do
  resources :likes
  get '/', to: 'pages#home'
  get '/login', to: 'sessions#new'
  post '/session', to: 'sessions#create'
  #get '/projects/new', to: 'projects#new'
  #post '/projects', to: 'projects#create'
  #post '/comments', to: 'comments#create'
  resources :projects#, only: [:new, :create, :show]
  resources :users
  resources :comments
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #Resources writes all the routes for you
end
