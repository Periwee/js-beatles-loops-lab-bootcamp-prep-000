// add solution here
function theBeatlesPlay(musicians, instruments){
    var i=0;
    var myArray = [];
    var arrayLength = musicians.length;
    for(i=0;i<arrayLength;i++){
        myArray[i]=musicians[i]+ ' plays ' +instruments[i];
    }
    return myArray;
}

function johnLennonFacts(array){
  var i=0;
  var myArray = [];
  var arrayLength = array.length;
  for(i=0;i<arrayLength;i++){
      myArray[i]=array[i]+ '!!!'
  }
  return myArray;
}

function iLoveTheBeatles(number){
    var i=15-number
    var myArray = []
    do{
      myArray[i]= "I love the Beatles!"
      i--
    }while(i>0)
}
