var encrypt = function(sentence){
  var nearestSquare = Math.ceil(Math.sqrt(sentence.length));
  alert(nearestSquare);
  var column = new RegExp('.{1,' + nearestSquare + '}', 'g');
  // var row = function(){
  //   if ((nearestSquare * nearestSquare) = sentence.length) {
  //     return nearestSquare;
  //   } else {
  //     return nearestSquare + 1;
  //   }
  // }
  var grouped = sentence.match(column);
  alert(grouped);
}


$(function(){
  $('#user-input').submit(function(event){
    event.preventDefault();
    var userInput = $('input').val().replace(/ /g,"");
    var encrypted = encrypt(userInput);

    $('#result').text(encrypted)

  });
});
