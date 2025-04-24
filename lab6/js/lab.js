// index.js - purpose and description here
// Author: Chris Lam
// Date: 4/23/25

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // Define Variables 
  let myTransport = ["bus", "legs", "uber"];

  //create an object for my main ride
  myMainRide = {
    make: "Audi",
    model: "Q5",
    color: "forest green",
    year: 2021,
    age: function() {
        return 2025 - this.year;
    }
  };
  //output
  document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
  document.writeln("My Main Ride: <pre>",
      JSON.stringify(myMainRide, null, '\t'), "</pre>");
}

// let's get this party started
main();
