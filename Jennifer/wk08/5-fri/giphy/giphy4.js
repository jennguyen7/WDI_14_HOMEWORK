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

var jumpamt = 5;
var totaljump = 0;
var optionsbase = '';

function displayRows (response, start) {
	var nextstartidx = (start+jumpamt > response.data.length) ? response.data.length : start+jumpamt;
	for(var i = start; i < nextstartidx; i++) {
		console.log('response.data '+response.data[i].images.fixed_height.url);
		var $newDivElem = $('<div>');
		var $newImgElem = $('<img>');

		$newDivElem.attr('class', 'imageDisplay')
		$newImgElem.attr('src',response.data[i].images.fixed_height.url);

		$newDivElem.append($newImgElem); 
		$newContainer.append($newDivElem);
		$('body').append($newContainer);
	};
}

function handleResponse(response) {
		console.log(response.data); //returns an array

		var idx = 0;
		var ajaxCallInProgress = false;

		displayRows (response, idx);

		$(window).scroll(function(){
			if ($(window).scrollTop() == $(document).height() -$(window).height()) {
				console.log('at the bottom now!'); 

				if (ajaxCallInProgress == false)
				{
					if (idx+jumpamt < response.data.length) { // test that we didn't exhaust all remaining elements in a previous iteration through here
						idx = idx+jumpamt;
						displayRows (response, idx);
					} else {
						ajaxCallInProgress = true;
						totaljump=totaljump+response.data.length;
						optionsbase=optionsbase+'&offset='+(totaljump+1);
						console.log('need to make another call optionsbase='+optionsbase);
						var options = {
							url: optionsbase
						};
						$.ajax(options).done(function (response) {handleResponse(response, options);} );
					}
				}
			};
		});
	}

$button.click(function(input){
	optionsbase = 'http://api.giphy.com/v1/gifs/search?q='+$input.val()+'&api_key=SLPh3olSsXt6nZ8OJnljniVwApYYDn55';

	var options = {
		url: optionsbase
	};

	$newContainer.empty();

	$.ajax(options).done(function (response) {handleResponse(response);} );

});