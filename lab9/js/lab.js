// index.js - the purpose is a jQuery script that utilizes buttons to change elements on the page
// Author: Chris Lam
// Date: 5/7/25

// Constants

// Functions

// adding button (challenge section)
$("#Challenge").append("<button id='button-challenge'>Super Silly Mode</button>");

// event listner (challenge section)
$("#button-challenge").click(function(){
  $("#Challenge").toggleClass("special");
});

// adding button (problems section)
$("#Problems").append("<button id='button-problems'>Super Silly Mode</button>");

// event listner (problems section)
$("#button-problems").click(function(){
  $("#Problems").toggleClass("special");
});

// adding button (Reflection section)
$("#Reflection").append("<button id='button-reflection'>Super Silly Mode</button>");

// event listner (Reflection section)
$("#button-reflection").click(function(){
  $("#Reflection").toggleClass("special");
});

// adding button (results section)
$("#Results").append("<button id='button-results'>Super Silly Mode</button>");

// event listner (results section)
$("#button-results").click(function(){
  $("#Results").toggleClass("special");
});