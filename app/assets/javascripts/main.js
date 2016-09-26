// thanks James & Joe from Purple Rain for thinking out the data flow & helping with listing the items

function renderJoke (oneJoke) {
// console.log(oneJoke.joke)
  var $sampleJoke = oneJoke.joke
  let $joke = $('<h3>').text($sampleJoke.replace(/&quot;/g,'"'))
  var $container = $('#joke-container')
  $('#jokes').html($joke)
}

function getJokes(){
  $.getJSON('/jokesget').done(function(jokes) {
    let oneJoke = jokes.value.shift()
    renderJoke(oneJoke)
    //fix shift unecessary for one joke - clean up later
  })
}

function emptyContainer(){
  $('#jokes').empty();
}

function getData(e){
  emptyContainer();
  $('#jokes')
  return $.getJSON('/jokes')
}

function listJokes(e){
  getData(e).done(function(data){

    console.log(data)
    setTimeout(function(){
      emptyContainer();
      data.forEach(function(joke){

        appendJoke(joke.joke);
      })
    },300)
  });
}

function appendJoke(joke){
  let $joke = $('<li>').addClass('listed').text(joke);
  $('#jokes').append($joke);
}



//ouch, create joke????????



// random colors code below modified from from treehouse random background color
// https://teamtreehouse.com/community/random-background-color
   function ran_col() { //function name
                var color1 = '#'; // hexadecimal starting symbol
                var color2 = '#'; // hexadecimal starting symbol
                var letters1 = ['FF5555','3BB281','4CB0D5','F2A266','5F7CEA']; //Set your colors here
                var letters2 = ['BBB094','E8E0CB','65C0B9','842871','CD4221']; //Set your colors here
                color1 += letters1[Math.floor(Math.random() * letters1.length)];
                color2 += letters2[Math.floor(Math.random() * letters2.length)];
                var $jokescolor = $('#jokes')
                var $bodybg = $('body')
                var $next = $('#next')
                var $save = $('#save')
                var $list = $('#list')
                $jokescolor.css({color: color1});
                $bodybg.css({backgroundColor: color2});
                $next.css({color: color1});
                $next.css({backgroundColor: color2});
                $save.css({color: color2});
                $save.css({backgroundColor: color1});
                $list.css({color: color1});
                $list.css({backgroundColor: color2});
            }

function saveJoke(e){
    // e.preventDefault();
    console.log('you hit the save')
    let $svjoke = $('h3').text();
    console.log($svjoke)
    console.log($svjoke)
    let data = {
      joke: $svjoke,
      categories: 'hello'
      // categories: $children.eq(1).val(),
      }

    $.post('/jokes', data).done ( (response) => {
    console.log(response);
    })
}

// function renderList {

// }


// function listJokes(e) {
//   console.log('dead fun')
//   $.getJSON('/jokes').done(function(jokes) {
//   renderList(jokes)

//   })
// }

// run the random color & jokes
$(function() {

  console.log('hello hello')
  ran_col();
  getJokes();


  $('#next').click(function() {
    console.log('hi')
    ran_col()
    getJokes()
  })

  $('#save').click(function() {
    saveJoke()
    ran_col()
    getJokes()
  })

 $('#list').click(function() {
    emptyContainer()
    ran_col()
    listJokes()

  })
});
