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

// constant/our url
const comicObj = {
    url: "https://xkcd.com/514/info.0.json",
    type: "GET",
    dataType: "JSON"
}

// generate random comic
$.ajax(comicObj)
  .done(function(data){
   console.log("Boom");
   console.log(data);
   let results = data.results;
   let randomIndex = Math.floor(Math.random() * results.length);
   let randomComic = results[randomIndex].name;
   $("#output").html("<h1>" + randomComic);
   })
   .fail(function(xhr, status, errorThrown) {
   console.log(errorThrown + " Status:" + status);
  })

