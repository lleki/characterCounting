function countLetters(word){

// all unique chracters
// number of times
//returns an object

var count = {};

//go through string to find all unique chars
for( var x = 0; x < word.length ; x++){

  var letter = word[x];
  if(letter !== " "){
    if(count[letter] == undefined){
      count[letter] = 1;
    }else{
      count[letter] += 1;
    }
  }
}
  console.log(count);
}
countLetters("lighthouse is in the house");
