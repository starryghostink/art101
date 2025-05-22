// index.js - to create an event and form
// Author: Chris Lam
// Date: 5/18/25

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}
// personName - function that takes the person's name and sorts the letters alphabetically 
function personName(userName) {
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

// event listener
$("#enter").click(function(){
  // value
    const yourName = $("#your-name").val();

  // sorting
    let yourNameSorted = personName(yourName);

  // append new div to output
    $("#output").html('<div class="text"><p>' + yourNameSorted + '</p></div>');

})
