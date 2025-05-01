// index.js - purpose and description here
// Author: Chris Lam
// Date: 4/30/25

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}
// personName - function that takes the person's name and sorts the letters alphabetically 
function personName() {
  let userName = window.prompt("I wanna sort your name alphabetically.");
  console.log("userName =", userName);
  // turn name to lowercase
  userName = userName.toLowerCase();
  // spliting string to array
  let letterArray = userName.split("");
  // sorting array
  letterArray = letterArray.sort();
  // joining array to string again
  let namesort = letterArray.join("");
  console.log("namesort =", namesort);
  // return the name string
  return namesort;

}

// output
document.writeln("Name is better now ", 
    personName(), "</br>"
);
