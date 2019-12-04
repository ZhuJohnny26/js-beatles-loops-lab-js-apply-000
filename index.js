// add solution here
function theBeatlesPlay(musicians, instruments){
  var i
  var arr = [] 
    for(i = 0; i < musicians.length; i++){
      var string = musicians[i] + " plays " + instruments[i]
      arr.push(string)
    }
    return arr
}

function johnLennonFacts(facts){
  var size = facts.length
  var i = 0
  while(i < size){
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}