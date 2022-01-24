var numClicks = 0; //keeps track of num of times the user clicks on a button

// Array including various quotes we will index through and display
var quotes = ['"Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open."', 
'"Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious." ', '"Follow your inner moonlight; don\'t hide the madness."'];

// create the function called by pressing the button
function nextQuote() {
  document.getElementById("quote").innerHTML = quotes[numClicks];


  if(numClicks == (quotes.length - 1)){
    numClicks = 0;
  }
    numClicks++;
  
   }
