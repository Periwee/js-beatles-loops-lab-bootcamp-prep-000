// add solution here
function theBeatlesPlay(musicians, instruments){
    var i=0;
    var myArray = [];
    var arrayLenght = musicians.lenght;
    console.log(arrayLenght);
    for(i=0;i<arrayLenght;i++){
        myArray[i]=musicians[i]+ ' plays ' +instruments[i];
    }
    return myArray;
}
