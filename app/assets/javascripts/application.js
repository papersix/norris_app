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


// thanks Joe from Purple Rain for helping with the js

function renderJoke (oneJoke) {
// console.log(oneJoke.joke)
  let $sampleJoke = oneJoke.joke
  let $joke = $('<h3>').text($sampleJoke)
  var $container = $('#joke-container')
  $('#jokes').append($joke)

}

function getJokes(){
  $.getJSON('/jokesget').done(function(jokes) {
    let oneJoke = jokes.value.shift()
    //fix shift unecessary for one joke
      renderJoke(oneJoke)

  })
}

$(function() {
  console.log('hi there')
  getJokes();
});



function createJoke(e){
    e.preventDefault();
    console.log('you hit the save')
    let $cnjoke = $('h3');
    let data = {
      joke: $cnjoke.text()
      // categories: $children.eq(1).val(),
      }

    $.post('/jokes', data).done ( (response) => {
    console.log(response);
    })

  }
$('#notWorking').click(function() {
  console.log('go away');
})


$('#theButton').submit(createJoke)
// function getJokes(){
//   $.getJSON('/jokes').done(function(jokes) {
//     let oneJoke = jokes.value.shift()
//     console.log(jokes.value)
//     jokes.results.forEach(function(joke){
//       renderJoke(joke);
//     })
//   })
// }





