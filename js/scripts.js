function encrypt(sentence){
  var nearestSquare = Math.floor(Math.sqrt(sentence.length));
  var column = new RegExp('.{1,' + nearestSquare + '}', 'g'); //   /.{1,x}/g
  var groups = sentence.match(column);
  var encryptedArray = [];
  for (var i = 0; i < groups.length; i++) {
    groups.forEach(function(group){
      encryptedArray.push(group.charAt(i));
    });
  console.log(encryptedArray);
  }
  return encryptedArray;
    
  }

function decrypt(sentence) {
  var nearestSquare = Math.ceil(Math.sqrt(sentence.length));
  var column = new RegExp('.{1,' + nearestSquare + '}', 'g');
  var groups = sentence.match(column);
  var encryptedArray = [];
  for (var i = 0; i < groups.length; i++) {
    groups.forEach(function(group){
      encryptedArray.push(group.charAt(i));
    });
  console.log(encryptedArray);
  }
  return encryptedArray;
}

$(function(){
  $('#user-input').submit(function(event){
    event.preventDefault();
    var userInput = $('input').val().replace(/ /g,"");
    var encrypted = encrypt(userInput).join("");
    encrypted = encrypted.match(/.{1,5}/g).join(" ");
    $('#result').text(encrypted);
    var decrypted = decrypt(encrypted.replace(/ /g,""));
    $('#result').text("<br>"decrypted);
  });
});
