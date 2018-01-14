     
=begin
Movies I

Specification

Build a search form that lets the user enter a movie name. The Sinatra app will use HTTParty to fetch the data for the chosen movie from OMDB and display it on the page.

Build a Sinatra application
Include:
app.rb
views/layout.erb
views/index.erb
views/movie.erb
views/about.erb
public/css/style.css
example httparty usage

require 'httparty'
result = HTTParty.get('http://omdbapi.com/?t=once')
result.parsed_response

Additional Resources

demo
Open movie database API
sinatrarb
Movies_2

A more advanced version of the Movies Sinatra App
Summary

The students will update their movies app to allow users to search the database of movies.

Specification

Instead of returning a single title, the OMDb API allows you t do a search which will return multiple titles.

For example if you search on Jaws, you will get a list like the following:

Jaws
Jaws 2
Jaws 3-D
Jaws Special
Jaws Wired Shut
Update your app to allow users to enter a search for movies, and to show the list as a set of links. Users should then be able to click on the link and go to the movie-etails page (like in your existing app).

Extra credit:

Consider updating the search functionality so that if you just get one movie back - you don't show the list but take the user straight to the page that shows the information (fewer clicks makes for better user experience).

Extra extra credit:

Everytime a user does a search save the movie searched into a file called search_history.txt

add an extra path '/history' that list out all search history



=end

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'

get '/' do
	erb :index
end


get '/movie' do
	url = params["title_input"]
	#result = HTTParty.get("http://omdbapi.com/?t=#{url}&apikey=2f6435d9")
	result = HTTParty.get("http://omdbapi.com/?s=#{url}&apikey=2f6435d9")
	hash = result.parsed_response #puts a hash
	@hash = hash["Search"] #puts an array	
	erb :movie
end

get '/moviedetail' do
 
	imdbID = params["i"] # grab imdbID parameter from requests
	conn = PG.connect(dbname: 'omdb_lookup'); #conn is an object instance which contains a connection to the postgress database (omdb_lookup). it has attributes on it you can reference, and methods you can call that operate directly on the database you have connected to  
	sqlstr = "SELECT * FROM movie_lookup where imdbID='#{imdbID}'" # setup the sql query we want to execute into string type attribute, we substitue the value of the imbdID attribute into this string using #{} 
	@movie = conn.exec(sqlstr) # use the conn database connection instance to execute the query, by calling its exec() method. the result set is returned into @movie
	
	#@movie is a result set type instance (I wonder if the class name is something like PGResultSet?
	#  .ntuples() is a method of PGResultSet - you can't call ntuples on a conn instance (for examnple)
	
	if @movie.ntuples()<=0  # check whether the query result set contained in @movie as any rows in it (.ntuples() is an instance type method (of result set type object instances) that indicates the number of rows returned)
		result = HTTParty.get("http://omdbapi.com/?i=#{imdbID}&apikey=2f6435d9")
		hash = result.parsed_response #puts a hash   - parsed_response is an attribute of result
		insertstr = "INSERT INTO movie_lookup (title,imdbID,year,poster) values ('#{hash["Title"]}','#{imdbID}','#{hash["Year"]}','#{hash["Poster"]}');"
		conn.exec(insertstr) # execute the insert query (we don't look at the result, assume it's ok - we could do a check if we wanted to)
		# at this point we've completed doing the insert into the database
		# now we want to show the next page, so let's setup the values that need to be displayed
		# we have these available from the api call, grab them from the 'hash' 
		@title = hash["Title"] #puts an array
		@year = hash["Year"] #puts an array
		@poster = hash["Poster"]
	else 
		#we only reach this point if the sql select query worked and found an existing row
		# so all we need to do is to grab the values from the row that has been found
		# we [0] to reference the first row (I think this is needed because we didn't query using a primary key, which means that multiple rows could have been returned, so even if only one row was returned you still need to use the [0] to access it)
		@title = @movie[0]["title"]
		@year = @movie[0]["year"] #puts an array
		@poster = @movie[0]["poster"]
	end
	
	conn.close
	erb :displayindividual
end


=begin
	
imdbID = params["i"]
	#title = params["t"]
	#result = HTTParty.get("http://omdbapi.com/?t=#{title}&apikey=2f6435d9")
	result = HTTParty.get("http://omdbapi.com/?i=#{imdbID}&apikey=2f6435d9")
	hash = result.parsed_response #puts a hash
	@title = hash["Title"] #puts an array
	@year = hash["Year"] #puts an array
	@poster = hash["Poster"]
	
=end

