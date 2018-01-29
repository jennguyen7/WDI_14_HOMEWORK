Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  				# controller file & method 'controller_Name#method_Within_Controller'
  get '/', to: 'pages#home'
  get '/about', to: 'pages#about'
  #get '/dishes/new', to: 'dishes#new'
  #get '/dishes/:id', to: 'dishes#show'
  #get '/dishes', to: 'dishes#index'
  #post '/dishes', to: 'dishes#create' #rails predetermined as create
  delete '/dishes/:id', to: 'dishes#destroy'
  put 'dishes/:id', to: 'dishes#update'
  #get 'dishes/new', to: 'dishes#new' #NB WILL NOT WORK HERE BECAUSE line 9 matches with get '/dishes/:id', to: 'dishes#show'
  resources :dishes #generates all the routes for you
end
