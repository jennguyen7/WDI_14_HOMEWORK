console.log('to the future');


//using s=jaws to request a list of all fhe movies
//use js dom creation to show it on the page
//show a list of movies on the page wrapped in paragraphs for each movie

var $container = $('.container');
var $input = $('<input>');
var $button = $('<button>');
$button.text('Search');
$input.attr('type', 'text');
$('body').append($input); //why do I need to append to body and NOT container????
$('body').append($button);



$button.click(function(input){

	var options = {
		url: 'http://www.omdbapi.com/?apikey=2f6435d9&s='+$input.val(),
	};

	$.ajax(options).done(function(res){
		console.log(res.Search);

		var x = res.Search; 
		var $container = $('.container');


		x.forEach(function(collection) {
			console.log(collection.Title, collection.Poster);


			//return collection.Title; //WE ARE NOT DOING ANOTHER SEARCH!!
			// var $list = $('collection.Title'); 
			
			var $newDivElem = $('<div>');
			var $newH2Elem = $('<h2>');
			var $newImgElem = $('<img>');
			var $newAelem = $('<a>');

			$newH2Elem.text(collection.Title);
			$newImgElem.attr('src', collection.Poster);
			$newAelem.attr('href', 'http://www.omdbapi.com/?apikey=2f6435d9&t='+collection.Title);

			//$newDivElem.append($newH2Elem);
			$newAelem.append($newH2Elem);
			$newDivElem.append($newImgElem);

			$container.append($newAelem);
			$container.append($newDivElem);
		});

	});
});

/*
function myForEach(arr, fn) {
	for (var i =0; i < arr.length; i++) {
		fn(arr[i])
	}
}

var fruits = ['apple', 'banana', 'mango'];

                   //callback function
myForEach(fruits, function(thing) {
	console.log(thing.toUpperCase())
 })

 */