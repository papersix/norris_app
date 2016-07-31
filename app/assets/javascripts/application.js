// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


function renderJoke (oneJoke) {
console.log(oneJoke.joke)
  let $sampleJoke = oneJoke.joke
  let $joke = $('<h3>').text($sampleJoke)
  var $container = $('#joke-container')
  // var $joke = $('<li class="joke">' + oneJoke.joke + '</li>')

  // $joke.appendTo($('body'))
  $container.append($joke)

}

function getJokes(){
  $.getJSON('/jokes').done(function(jokes) {
    let oneJoke = jokes.value.shift()
    // console.log(oneJoke)
    // oneJoke.forEach(function(joke){

      renderJoke(oneJoke)

    // })
  })
}

$(function() {
  getJokes();
});



// function getJokes(){
//   $.getJSON('/jokes').done(function(jokes) {
//     let oneJoke = jokes.value.shift()
//     console.log(jokes.value)
//     jokes.results.forEach(function(joke){
//       renderJoke(joke);
//     })
//   })
// }





