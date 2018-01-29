class DishesController < ApplicationController
	def new
	end

	def index
		@dishes = Dish.all
	end

	def show
		@id = params[:id]
		@dish = Dish.find(params[:id]) #returns an object
	end

	def create
		dish = Dish.new
		dish.name = params[:name]
		dish.save
		redirect_to '/dishes'
	end

	def destroy
		@dish = Dish.find(params[:id])
		if @dish.destroy
			redirect_to '/dishes'
		else
			render :show
		end
	end

end
