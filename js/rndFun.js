function genQuote() {
  var randNum = Math.floor(Math.random()*8+1 );
  document.getElementById('quote').innerHTML = quotes[randNum];
}

//quote array
var quotes = ["Quote 2", "Quote 3", "Quote 1"];
