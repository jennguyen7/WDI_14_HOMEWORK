// 5. sum of multiples

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// for example:

// 1, 2, [3], 4, [5], [6], 7, 8, [9]

// 3 + 5 + 6 + 9 = 23
// Write a program that, given a number, can find the sum of all the multiples of 3 or 5 up to and including that number.

// Write the program in javascript with nodejs.

// $ node sumOfMultiples.js 9
// $ 23
// $ node sumOfMultiples.js 5
// $ 8

console.log(process.argv);
var express = require('express');
var _ = require('underscore');

//+1 because it is including the number in _.range
var userInput = Number(process.argv[2]) + 1
var numRangeArr = _.range(1,userInput);
console.log(numRangeArr);
var total = 0;

for (i = 1; i <= numRangeArr.length; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		total += i;
	};
};
console.log(total);

