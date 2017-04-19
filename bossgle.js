var score = 0;
var letterContainer = [];
var letters = [];
var active_letters = [];
var word_list = [];

function randomLetters() {
    var num = Math.floor(Math.random()*26);
    var letter = String.fromCharCode(num + 65);
  return letter;
}
function display_letters(){
  $('#letter-container').html(active_letters.join(''));
}
function update_score(add_me){
  var $score = $('#totalScore');
  $score.html(parseInt($score.html())+add_me);
}
function update_word_count(){
  var $count = $('#wordCount');
  $count.html(word_list.length);
}

$(function(){
  $('.flex-item.box').on('click', function(e){
    if($(this).hasClass('box-disabled')) return;
    //If the jquery wrapped object that this element
    active_letters.push(this.innerHTML);
    console.log(active_letters);
    display_letters();
  }).each(function(i,item){
    var $this = $(item),
        letter = randomLetters();
    //this function handles the initial setup.
    while(letters.indexOf(letter)!=-1){
      letter = randomLetters();
    }
    letters.push(letter);
    $this.html(letter);
  });

  $('.btn-danger').on('click', function(){
    active_letters = [];
    display_letters();
  });

  $('.btn-primary').on('click', function (e){
    var word = active_letters.join('').toLowerCase();
    console.log(word, isBasicWord(word));
    if(isBasicWord(word)){
      active_letters=[];
      display_letters();
      word_list.push(word);
      var score = 9*word.length;
      var new_items = $('<div class="col-7">'+word+'</div><div class="col-5">'+score+'</div>');
      $('#current-words').prepend(new_items);
      update_score(score);
      update_word_count();
    }
    
  });

});
