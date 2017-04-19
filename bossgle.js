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
});

for(var i=0;i<$('.flex-item').length;i++){
  item = $('.flex-item')[i];
}

$(function(){
  $('.btn-danger').on('click', function (e){
    if($(this).hasClass('box-disabled')) return;
    active_letters.length = 0;
    display_letters();
    console.log (active_letters);
  })
});

//$(function(){
//  $('.btn-warning').on('click', functiontion (e)){
//
//});

$(function(){
  $('btn-primary').on('click', function (e){
    var word = active_letters.join('')
//    if($(this).hasClass('box-disabled')) return;
    if (isBasicWord(word)) {
      word_list.push(word);
      console.log(word_list)
    }
    
  });
});
