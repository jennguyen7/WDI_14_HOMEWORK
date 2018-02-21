require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
# require 'pry'

get '/' do
  @stock = StockQuote::Stock.quote(params[:stock])
  erb :index
end

get '/about' do
  erb :about
end

# binding.pry
# puts "paused"