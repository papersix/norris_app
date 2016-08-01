// thanks Joe from Purple Rain for thinking out the data
function renderJoke (oneJoke) {
// console.log(oneJoke.joke)
  let $sampleJoke = oneJoke.joke
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

//ouch, create joke????????

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
                $jokescolor.css({color: color1});
                $bodybg.css({backgroundColor: color2});
                $next.css({color: color1});
                $next.css({backgroundColor: color2});
                $save.css({color: color2});
                $save.css({backgroundColor: color1});
            }

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

});
