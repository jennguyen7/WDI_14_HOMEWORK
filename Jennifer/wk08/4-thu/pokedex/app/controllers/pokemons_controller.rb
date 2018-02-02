class PokemonsController < ApplicationController

	def new
	end

	def index
		@pokemons = Pokemon.all
	end

	def show
		@pokemon = Pokemon.find(params[:id])
	end

	def create
		pokemon = Pokemon.new
		pokemon.species = params[:species]
		pokemon.nickname = params[:nickname]
		pokemon.level = params[:level]
		pokemon.save
		redirect_to '/pokemons'
	end

	def edit
		@pokemon = Pokemon.find(params[:id])
	end
	
	def update
		@pokemon = Pokemon.find(params[:id])
		@pokemon.species = params[:species]
		@pokemon.nickname = params[:nickname]
		@pokemon.level = params[:level]
		@pokemon.save
		redirect_to "/pokemons/#{params[:id]}"
	end

	def destroy
		@pokemon = Pokemon.find(params[:id])
		if @pokemon.destroy
			redirect_to '/index'
		else
			render :show
		end
	end


end



