class SessionsController < ApplicationController
	def new
	end

	def create
		#check email
		user = User.find_by(email: params[:email])

		#check password
		if user && user.authenticate(params[:password])
		#have a user and authenticate return truthy
			session[:user_id] = user.id # just a hash, use it to check who is logged in
			redirect_to '/'
		else
			render :login
		end	
	end
end

