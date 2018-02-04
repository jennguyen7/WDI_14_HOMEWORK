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
		url: 'http://api.giphy.com/v1/gifs/search?q='+$input.val()+'&api_key=SLPh3olSsXt6nZ8OJnljniVwApYYDn55'
	};

	$newContainer.empty();

	$.ajax(options).done(function(response) {
		console.log(response.data); //returns an array

		var arr1 = response.data;
		var arr2 = arr1.slice(0, 9);
		var arr3 = arr1.slice(10, 19);
		var arr4 = arr1.slice(20, 30);

		for(var i = 0; i <= arr2.length; i++) {
			console.log('arr2: '+response.data[i].images.fixed_height.url);
			var $newDivElem = $('<div>');
			var $newImgElem = $('<img>');

			$newDivElem.attr('class', 'imageDisplay')
			$newImgElem.attr('src',response.data[i].images.fixed_height.url);

			$newDivElem.append($newImgElem); 
			$newContainer.append($newDivElem);
			$('body').append($newContainer);
		};

		$(window).scroll(function(){
			if ($(window).scrollTop() == $(document).height() -$(window).height()) {
			console.log('at the bottom now!'); 

				 for(var i = 0; i <= arr3.length; i++) {
				 	console.log('arr3: ' + response.data[i].images.fixed_height.url);

					var $newDivElem = $('<div>');
					var $newImgElem = $('<img>');

					$newDivElem.attr('class', 'imageDisplay')
					$newImgElem.attr('src',response.data[i].images.fixed_height.url);

					$newDivElem.append($newImgElem); 
					$newContainer.append($newDivElem);
					$('body').append($newContainer);
				 };

				for(var i = 0; i <= arr4.length; i++) {
		 			console.log('arr4: ' +response.data[i].images.fixed_height.url);
		 			var $newDivElem = $('<div>');
					var $newImgElem = $('<img>');

					$newDivElem.attr('class', 'imageDisplay')
					$newImgElem.attr('src',response.data[i].images.fixed_height.url);

					$newDivElem.append($newImgElem); 
					$newContainer.append($newDivElem);
					$('body').append($newContainer);
		 		};
			};
		});

	});

});