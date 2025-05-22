// index.js - purpose and description here
// Author: Chris Lam
// Date: 5/21/25

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function FizzBuzz(){
  let oneLongString = "";
  for (let i = 1; i <= 200; i++) {
    let str = '';
    if (i % 3 == 0) {
      str += "Fizz!";
    }
    if (i % 5 == 0) {
      str += "Buzz!";
    }
    if (i % 7 == 0) {
      str += "Boom!";
    }
    if (str != ""){
      oneLongString += str + "<br>";
    }
  }
  $("#output").html(oneLongString);
}


  FizzBuzz();
