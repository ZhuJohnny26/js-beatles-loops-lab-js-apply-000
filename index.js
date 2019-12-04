// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr = [] 
    for(int i = 0; i < musicians.length; i++){
      var string = musicians[i] + instruments[i]
      arr.push(string)
    }
    return arr
}