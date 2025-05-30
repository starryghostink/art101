// index.js - purpose and description here
// Author: Chris Lam
// Date: 5/29/25

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}
// constant/our url
const ajaxPokemon = {
    url: "https://pokeapi.co/api/v2/pokemon?limit=100/",
    type: "GET",
    dataType: "JSON"
}
// event listener
$("#activate").click(function(){
console.log("Here's a Pokemon");
// generate random pokemon
$.ajax(ajaxPokemon)
  .done(function(data){
   console.log("Boom");
   console.log(data);
   let results = data.results;
   let randomIndex = Math.floor(Math.random() * results.length);
   let randomPokemon = results[randomIndex].name;
   $("#output").html("<h1>" + randomPokemon);
   })
   .fail(function(xhr, status, errorThrown) {
   console.log(errorThrown + " Status:" + status);
  })
})

