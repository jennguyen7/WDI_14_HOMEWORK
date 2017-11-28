/*
var menuChoice = 'pork chops';


if (menuChoice === 'Tofurkey' || menuChoice === 'fruit salad') {
	console.log('This cuisine is friendly');
} else {
	console.log('Vegans beware!');
}
*/

var menuChoice = prompt("Tonight's menu includes steak, fruit salad, Tofurkey and pork chops. Order?");
menuChoice = menuChoice.toLowerCase();


switch (menuChoice) {
	case 'fruit salad':
		console.log('This cuisine is friendly');
		break;
	case 'Tofurkey':
		console.log('This cuisine is friendly');
		break;
	case 'pork chops':
		console.log('Vegans beware!');
		break;
	case 'steak':
		console.log('Vegans beware');
		default:
		console.log('Good luck');
}
