var score = 0;
var letterContainer = [];
var letters = [];
function randomLetters(){

  for (var i=0; i < 16; i++)
    var num = Math.floor(Math.random()*26);
    var letter = String.fromCharCode(num + 65);
  letters.push(letter);
  return letter;
}

$(function(){
  $('.flex-item.box').on('click', function(e){
    console.log(this.innerHTML);
  }).each((i,item)=>{
    var $this = $(item);
    $this.html(randomLetters());
  });
});

