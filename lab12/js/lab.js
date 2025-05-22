// index.js - sort someone into a house based on their name
// Author: Chris Lam
// Date: 5/21/25

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function choosyHat(name) {
  let length=name.length
  let str = "";
  mod = length % 9;

  if (name[0].toLowerCase() == 'b' && mod == 5) {
    str = "Emperor Coven"
  } else if (mod == 0) {
    str = "Construction Coven";
  } else if (mod == 1) {
    str = "Potions Coven";
  } else if (mod == 2) {
    str = "Healing Coven";
  } else if (mod == 3) {
    str = "Bard Coven";
  } else if (mod == 4) {
    str = "Oracle Coven"; 
  } else if (mod == 5) {
    str = "Abomination Coven";
  } else if (mod == 6) {
    str = "Beast Keeping Coven";
  } else if (mod == 7) {
    str = "Illusion Coven";
  } else if (mod == 8) {
    str = "Plant Coven";
  }
  return str;
}

$("#button").click(function(){
  let name =$("#input").val();
  console.log(name);
  let coven = choosyHat(name);
  console.log(coven);
  $("#output").html("<h1>" + "The Choosy Hat has put you in " + coven + "</h1>");
})