Rails.application.routes.draw do
  resources :jokes
  resources :jokesget, only:[:index]
  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
