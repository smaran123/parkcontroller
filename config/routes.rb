Rails.application.routes.draw do
  root 'home#index'
  resources :home do
    collection do
      get :about
      get :airbone
      get :ampli
      get :antenna
      get :antenna_control
      get :bit
      get :board
      get :career
      get :client
      get :combiner
      get :contact
      post :post_contact
      get :display
      get :document
      get :down
      get :engine_control
      get :faq
      get :feature_icons
      get :generator
      get :generator_control
      get :inserter
      get :loader
      get :low
      get :mil
      get :modulator
      get :partner
      get :pcm
      get :power_control
      get :privacy
      get :reader
      get :receiver
      get :recorder
      get :sdr
      get :service
      get :software
      get :system
      get :unit
      get :video
    end

  end
  
end
