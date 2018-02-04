var $container = $('<div>');
var $newContainer = $('<div>');
var $input = $('<input>');
var $button = $('<button>');

$container.attr('class', 'container');
$newContainer.attr('class', 'newContainer');
$button.text('Search');
$input.attr('type', 'text');

$container.append($input); 
$container.append($button);
$('body').append($container);


$button.click(function(input){
	var options = {
		url: 'http://api.giphy.com/v1/gifs/search?q='+$input.val()+'&limit=10&api_key=SLPh3olSsXt6nZ8OJnljniVwApYYDn55'
	};

	$newContainer.empty();

	$.ajax(options).done(function(response) {
		console.log(response.data);


		(response.data).forEach(function(res){

			console.log(res.images.fixed_height.url);

			
			var $newDivElem = $('<div>');
			var $newImgElem = $('<img>');

			$newDivElem.attr('class', 'imageDisplay')
			$newImgElem.attr('src',res.images.fixed_height.url);

			$newDivElem.append($newImgElem); 
			$newContainer.append($newDivElem);
			$('body').append($newContainer);


			$(window).scroll(function(){
	 		if ($(window).scrollTop() == $(document).height() -$(window).height()) {
		 			console.log('at the bottom now!');

		// 		$.ajax(options).done(function(response) {
		// 			console.log(response.data);


		// 		(response.data).forEach(function(res){

		// 			console.log(res.images.fixed_height.url);

			
		// 			var $newDivElem = $('<div>');
		// 			var $newImgElem = $('<img>');

		// 			$newDivElem.attr('class', 'imageDisplay')
		// 			$newImgElem.attr('src',res.images.fixed_height.url);

		// 			$newDivElem.append($newImgElem); 
		// 			$newContainer.append($newDivElem);
		// 			$('body').append($newContainer);

		// 		});

		// 	});


		 	}
		 });

		});

		

	});	

});






