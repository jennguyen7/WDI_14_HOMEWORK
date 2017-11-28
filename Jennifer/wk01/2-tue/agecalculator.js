/*
var question1 = prompt ("What year were you born in?")

var currentYear = 2017;




console.log(currentYear - question1 + " or " + (currentYear - question1 - 1));

*/

var date = new Date();
currentYear = date.getFullYear(); //doing this will mean that you don't have to set the year

var birthYear = prompt ("What year were you born in?");
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

console.log("They are either " + age1 + " or " + age2);



