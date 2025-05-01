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

console.log("The code is running!") 

iamsteve = [2,5,9,2,1902801842,80214]
function yippee(chickenjockey) {
  let equation = chickenjockey*2
      return equation;
}

iamsteve.map(yippee)

iamsteve.map(
  function(flintsteel){
      let result = flintsteel + 4;
      return result;
  }
)

netherite2 = iamsteve.map(yippee);
console.log("Results:",netherite2)

// output
document.writeln("Original Array: ", iamsteve, '<br>')
document.writeln("Mapped Array: ", netherite2)