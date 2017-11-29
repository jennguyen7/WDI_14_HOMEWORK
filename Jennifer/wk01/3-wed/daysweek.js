var days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

days_of_the_week.pop();
days_of_the_week.unshift("Sunday");
console.log(days_of_the_week);

var weekday = days_of_the_week.splice(1, 5);
console.log(weekday);

//days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var weekend = days_of_the_week.splice(days_of_the_week.length - 2, 5);
//why is it index 2? shouldn't it be 1?
console.log(weekend);


console.log(weekday.sort());