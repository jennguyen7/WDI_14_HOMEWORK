console.log("You have savings");

//savings account
var inputAmountS = document.querySelector(".inputSavings");

var spanS = document.querySelector(".spanSavings");

var depositBtnS = document.querySelector(".depositSavings");

var withdrawBtnS = document.querySelector(".withdrawSavings");

//checking account
var inputAmountC = document.querySelector(".inputChecking");

var spanC = document.querySelector(".spanChecking");

var depositBtnC = document.querySelector(".depositChecking");

var withdrawBtnC = document.querySelector(".withdrawChecking");

//savings account
function addS() {
	var resultS = Number(inputAmountS.value) + Number(spanS.textContent);

	spanS.textContent = resultS;
	console.log(resultS);

}

 var resultS = depositBtnS.addEventListener("click", addS);


function subtractS() {
	var resultS = Number(spanS.textContent) - Number(inputAmountS.value);

	spanS.textContent = resultS;
	console.log(resultS);
}

withdrawBtnS.addEventListener("click", subtractS);

// //checking account
function addC() {
	var resultC = Number(inputAmountC.value) + Number(spanC.textContent);

	spanC.textContent = resultC;
	console.log(resultC);

}

 var resultC = depositBtnC.addEventListener("click", addC);


function subtractC() {
	var resultC = Number(spanC.textContent) - Number(inputAmountC.value);

	spanC.textContent = resultC;
	console.log(resultC);
}

withdrawBtnC.addEventListener("click", subtractC);

