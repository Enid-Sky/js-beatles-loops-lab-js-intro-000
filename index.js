// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i < musicians.length; i++) {
  arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts){
  let i = 0;
  while(i<facts.length){
    facts[i] = facts[i] +  "!!!";
    i++;
  }
  return facts;
}


function iLoveTheBeatles(n){
  var arr = [];
  var string = "I love the Beatles!";
  do {arr.push(string), n++}
  while(n < 15);
  return arr;
}
