var select = document.getElementById("city-type");
var newOption1 = document.createElement("option");
newOption1.label="Austin";
select.appendChild(newOption1);

var newOption2 = document.createElement("option");
newOption2.label="L.A.";
select.appendChild(newOption2);

var newOption3 = document.createElement("option");
newOption3.label="NYC";
select.appendChild(newOption3);

var newOption4 = document.createElement("option");
newOption4.label="San Francisco";
select.appendChild(newOption4);

var newOption5 = document.createElement("option");
newOption5.label="Sydney";
select.appendChild(newOption5);



var toggleCity = function(event) {
	//var backgroundImage = document.querySelector("body").style.backgroundImage = "url('images/austin.jpg')"
	//backgroundImage.classList.add(.sydney);
	//document.body.style.backgroundImage = "url('images/sydney.jpg')"
	//var backgroundImage = document.querySelector("body").style.backgroundImage

	if (document.body.classList.length >= 1) {
	document.body.className = "";
	}	

		switch(select.selectedOptions[0].label) {
		case "Austin":
		document.body.classList.add("austin");
		break;

		case "L.A.":
		document.body.classList.add("la");
		break;

		case "NYC":
		document.body.classList.add("nyc");
		break;

		case "San Francisco":
		document.body.classList.add("sf");
		break;

		case "Sydney":
		document.body.classList.add("sydney");
		break;
	}

/*
	if (select.selectedOptions[0].label === newOption1.label) {
		document.body.classList.add("austin");
	} else if (select.selectedOptions[0].label === newOption2.label) {
		document.body.classList.add("la");
	} else if (select.selectedOptions[0].label === newOption3.label) {
		document.body.classList.add("nyc");
	} else if (select.selectedOptions[0].label === newOption4.label) {
		document.body.classList.add("sf");
	} else {
		document.body.classList.add("sydney");
	};
*/

};



//returns an array NodeList(6) = [option,option,option,option,option,option]
//use forEach to iterate
//It is an array of objects
//var allOptions = document.querySelectorAll("city-type");
//this is the same:
//document.getElementsByTagName("OPTION");

//allOptions.forEach(function(option){
	select.addEventListener("change", toggleCity);
//});



	




