/*
* Now we put everything together and also
* add the pretty print function
*/

function TrainLine(line) {
    // Note: that the parameter line follows the JSON format
    // We copy line into this object
    this.name = line.name;
    this.stations = line.stations;
    
    // Now the dump() function
    this.dump = function() {
        // This is easy, just returns stations.
        return this.stations.slice(0);
    }
    
    // Now the dump_reverse() function
    this.dump_reverse = function() {
        // First copy the stations into new variable
        return this.stations.slice(0).reverse();
    }

    // Note that this is just a copy from previous array lesson
    // Also note that previsousl we have (without "this")
    // var destIndex = stations.indexOf(destination);
    // Now we have with "this"
    // var destIndex = this.stations.indexOf(destination);
    this.trip = function(origin, destination)
    {
        // Index of the destination
        var destIndex = this.stations.indexOf(destination);
        
        // Index of the origin
        var origIndex = this.stations.indexOf(origin);
        
        // An arry of all stops between origin and destination
        var stops = [];
        
        // Upto this point, it is the same as trip_01()
        
        // Going toward the city, that is destIndex < origIndex
        if (destIndex < origIndex) {
            stops = this.stations.slice(destIndex, origIndex + 1);
            
            // We need to reverse the array
            stops.reverse();
        }
        else {
            stops = this.stations.slice(origIndex, destIndex + 1);            
        }
        return stops;
    }
}

/*
* This creates runtime error for our system
*/
function RuntimeError(message)
{
    this.message = message;
}

/*
* MelbTrain(lines)
* MelbTrain has the following data
* - train_lines
* - interChangeStation
* 
* It has the following methods
* function find_line_index(station)
* function journey(origin, destination)
* function pretty_print_to_string(stations)
*/
function MelbTrain(lines)
{
    this.train_lines = lines;
    this.interChangeStation = "Richmond";
    
    this.find_line_index = function(station)
    {
        // Set initial result to not found which is -1
        var result = -1;
        
        // First loop through all train lines
        for (var i = 0; i < this.train_lines.length; ++i) {              
            var line = this.train_lines[i];   // Pick up the line                
            var stationIdx = line.stations.indexOf(station);    // Check if the specified
                                                                // station is on the line
            if (stationIdx >= 0) {  // If found, break the loop
                result = i;         // Return the lineIndex of the line the station is on
                break;              // Need to break out of the loop
            }
        }
        return result;
    }
        
    this.journey = function(origin, destination)
    {
        // Find which line the origin is on
        // Note that we use the lineIndex to present the line, 
        // not the line name
        var origLineIndex = this.find_line_index(origin);
        
        // This is an error if origin is not on any line
        if (origLineIndex < 0) {
            throw new RuntimeError("Origin --".concat(origin).concat("-- not in the system"));
        }
     
        // Find which line the destination is on
        var destLineIndex = this.find_line_index(destination);
        
        // This is an error if destination is not on any line
        if (destLineIndex < 0) {
            throw new RuntimeError("Destination --".concat(destination).concat("-- not in the system"));
        }
        
        // If origin and destination is the same
        // then we do not go anywhere, return an array with only one station
        if (origin == destination)
            return [origin];
     
        // At this point, all errors are elimiated
        // Origin and destination are on the same line
        if (destLineIndex == origLineIndex) {
            // Just get all stations from origin to destination
            result = this.train_lines[origLineIndex].trip(origin, destination);
        }
        else {
            // Origin and destination is not on the same line
            // First travel from origin to interChangeStation
            var toInterChange = this.train_lines[origLineIndex].trip(origin, this.interChangeStation);
            
            // Remove the interchange station
            toInterChange.pop();
            
            // Then travel from interChangeStation to destination
            var fromInterChange = this.train_lines[destLineIndex].trip(this.interChangeStation, destination);        
            result = toInterChange.concat(fromInterChange);
        }
        return result;
    }
    
    // This function returns a string.
    // It does not actually print anything to anywhere
    this.pretty_print_to_string = function(stations) {       
        var result = "";
        for (var i = 0; i < stations.length; ++i) {
            result = result.concat(stations[i]);
            //console.log(stations[i]);
            // If not the last element then add the arrow
            if (i + 1 < stations.length) {
                result = result.concat(" --> ");
            }
        }
        return result;
    }
}

/*
 --------------------------------------------------
 Above this mark is the copy of melb_train.js
 --------------------------------------------------
*/

// This is a set of all utility functions
//This is a constructor
function Utils()
{
}

Utils.is_empty = function(str) {
    //str is empty when it is not valid OR
    //its length is zero
    return !str || str.length == 0;
}

function display(text) {
    document.getElementById("demo").innerHTML = text;
}

function read_elements() {
    var x = document.getElementById("frm1");
    var stops = [];
    var i;

    // this loop pushes the Origin input first
    //the Destination input to the stops array
    //Note stops is an array of string
    for (i = 0; i < x.length ;i++) {
        stops.push(x.elements[i].value)
    }
    console.log(stops);
    return stops;
}

function reset_all() {
    document.getElementById("frm1").reset();
    display("");
}

function find_route() {

    // This is public transport victoria
    var ptv = new MelbTrain([
        new TrainLine({
            name: "Alamein",
            stations: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
        }),
        new TrainLine({
            name: "Glen Waverly",
            stations: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
        }),
        new TrainLine({
        name: "Sandringham ",
        stations: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
        })
    ]);

    // stops[0] is Origin, stops[1] is Destination
    // Unpacking for readibility
    var [origin, destination] = read_elements();
    //The above line is equivalent to the following 3 lines:
    //var inputs = read_elements;
    //origin = inputs[0];
    //destination = inputs[1]

    var text = "";
    try {
        origin = origin.trim();
        destination = destination.trim();
        // First check if origin and destination is not empty
        if (Utils.is_empty(origin)) {
            throw new RuntimeError("Origin is empty");
        }
        if (Utils.is_empty(destination)) {
          throw new RuntimeError("Destination is empty");
        }

        trip = ptv.journey(origin, destination);
        text = ptv.pretty_print_to_string(trip);
    }
    catch (error) {
        text = error.message;
    }
    
    display(text);
}
