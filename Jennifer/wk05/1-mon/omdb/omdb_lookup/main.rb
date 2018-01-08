     
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
	erb :index
end


get '/movie' do
	url = params["title_input"]
	result = HTTParty.get("http://omdbapi.com/?t=#{url}&apikey=2f6435d9")
	hash = result.parsed_response #puts a hash
	@title = hash["Title"]
	@year = hash["Year"]
	@released = hash["Released"]
	@runtime = hash["Runtime"]
	@actors = hash ["Actors"]
	@ratings = hash["Ratings"]
	@poster = hash["Poster"]

	erb :movie
end

