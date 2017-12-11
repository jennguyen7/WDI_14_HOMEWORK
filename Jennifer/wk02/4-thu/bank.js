console.log("You have savings");

var inputAmount = document.querySelector(".input");

var span = document.querySelector("span");

var depositBtn = document.querySelector(".deposit");

var withdrawBtn = document.querySelector(".withdraw");


function add() {
	var result = Number(inputAmount.value) + Number(span.textContent);

	span.textContent = result;
	console.log(result);

}

 var result = depositBtn.addEventListener("click", add);


function subtract() {
	var result = Number(span.textContent) - Number(inputAmount.value);

	span.textContent = result;
	console.log(result);
}

withdrawBtn.addEventListener("click", subtract);
