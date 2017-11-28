var date = new Date();
currentYear = date.getFullYear(); //doing this will mean that you don't have to set the year

var birthYear = prompt ("What year were you born in?");
var age1 = currentYear - birthYear;
//var age2 = age1 - 1;

var maximumAge = prompt ("How old do you want to live until?");
var snackNumber = prompt ("How many snacks per day?");

console.log("You will eat " + ((maximumAge - age1) * snackNumber * 365) + " snacks.");

