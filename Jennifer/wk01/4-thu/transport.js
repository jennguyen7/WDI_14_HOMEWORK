/*
PT PLANNER

Melbourne Public Transport Journey Planner

There are 3 train lines:

The Alamein line has the following stops: 
Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.

The Glen Waverly line has the following stops: 
Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.

The Sandringham line has the following stops: 
Southern Cross, Richmond, South Yarra, Prahran, and Windsor.

All 3 train lines intersect at Richmond, 
but there are NO other intersection points as trains run express.

Write a javascript program that works out display the journey 
when you give it an origin and destination.

example:


origin: Melbourne Central
destination: Richmond

Melbourne Central -----> Parliament -----> Richmond

2 stops total
You may want to hard code the origin and destination for easier testing in the beginning.

Hints:

Consider diagramming the lines by sketching out the train lines and their stops and intersection. Think about what data structure to use to store each line and all the stops on each line.

The key to the lab is the intersection of the lines at Richmond.

Non-Required Bonus:

input validation
User must enter a line and station in the subway network
If the user enters something else, your program should handle it
Add additional lines

*/



var alameinLineArr = ("Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, Glenferrie").split(", ");
//console.log(alameinLine);

var glenWaverleyLineArr = ("Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong, Tooronga").split(", ");
//console.log(glenWaverleyLine);

var sandgrihamLineArr = ("Southern Cross, Richmond, South Yarra, Prahran, Windsor").split(", ");
//console.log(sandgrihamLine);

/*
//If I include the for loop it prints it out 4 times 

var journeyAl =  function(originCheck, destinationCheck) {
	for (var i = 0; i < alameinLine.length; i++) { 
		var originCheckPrint = alameinLine.indexOf(originCheck);
		var destinationCheckPrint = alameinLine.indexOf(destinationCheck) +1;
		console.log(alameinLine.indexOf(destinationCheck) + " stops ; " +alameinLine.slice(originCheckPrint, destinationCheckPrint).toString());
	}
}

*/


var journeyAl =  function(originCheck, destinationCheck) {
		var originCheckPrint = alameinLineArr.indexOf(originCheck);
		var destinationCheckPrint = alameinLineArr.indexOf(destinationCheck) +1;
		console.log(alameinLineArr.indexOf(destinationCheck) + " stops ; " +alameinLineArr.slice(originCheckPrint, destinationCheckPrint).toString());
};

var journeyGlen =  function(originCheck, destinationCheck) {
		var originCheckPrint = glenWaverleyLineArr.indexOf(originCheck);
		var destinationCheckPrint = glenWaverleyLineArr.indexOf(destinationCheck) +1;
		console.log(glenWaverleyLineArr.indexOf(destinationCheck) + " stops ; " +glenWaverleyLineArr.slice(originCheckPrint, destinationCheckPrint).toString());
};

var journeySan =  function(originCheck, destinationCheck) {
		var originCheckPrint = sandgrihamLineArr.indexOf(originCheck);
		var destinationCheckPrint = sandgrihamLineArr.indexOf(destinationCheck) +1;
		console.log(sandgrihamLineArr.indexOf(destinationCheck) + " stops ; " +sandgrihamLineArr.slice(originCheckPrint, destinationCheckPrint).toString());
};


/*
//Hard coding, doesn't allow you to get on at different lines

var ptvJourney = function (originCheck, destinationCheck) {
	var retVal = "";
	if(alameinLineArr.includes(originCheck) && alameinLineArr.includes(destinationCheck)) {
		//console.log(journeyAl(originCheck, destinationCheck));
		retVal = journeyAl(originCheck, destinationCheck);
	}else if(glenWaverleyLineArr.includes(originCheck) && glenWaverleyLineArr.includes(destinationCheck)) {
		//console.log(journeyGlen(originCheck, destinationCheck));
		retVal = journeyGlen(originCheck, destinationCheck);
	}else if(sandgrihamLineArr.includes(originCheck) && sandgrihamLineArr.includes(destinationCheck)) {
		//console.log(journeySan(originCheck, destinationCheck));
		retval = journeySan(originCheck, destinationCheck);
	}
	return retVal;
}

*/


// I'm trying to incorporate intersection and combinations
//i.e. your destination is "Burnley" on the alameinLineArr but your origin is "Flagstaff" on glenLineArr
//so you get in glenLineArr "Flagstaff", get off at "Richmond", get on alameinLineArr.
//Did I just make my life more complicated by pushing elements into an array?

var ptvJourney = function (originCheck, destinationCheck) {
	var retVal= "";
	if(alameinLineArr.includes(destinationCheck)) {
		retval = journeySan(originCheck) + " or " + journeyGlen(originCheck) + ""
	}else if(glenWaverleyLineArr.includes(destinationCheck)) {
		retval xxxx
	}else if(sandgrihamLineArr.includes(destinationCheck)) {
		retval xxx
	}

	return retval;
}



//found this block of code but not well understood how it is applied	
Array.prototype.intersect = function intersect(a, ...b) {
	    const c = function (a, b) {
	        b = new Set(b);
	        return a.filter((a) => b.has(a));
	    };
	    return undefined === a ? this : intersect.call(c(this, a), ...b);

	};


 console.log(alameinLineArr.intersect(glenWaverleyLineArr, sandgrihamLineArr));
// ["Richmond"];





