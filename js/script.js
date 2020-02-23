/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: 'You miss a 100 percent of the shots that you dont take.',
    source: 'Wayne Gretzky'
  },
  {
    quote: 'It is during our darkest moments that we must focus to see the light.',
    source: 'Aristotle'
  },
  {
    quote: 'Never let the fear of striking out keep you from playing the game.',
    source: 'Babe Ruth'
  },
  {
    quote: 'You can manipulate an opponent’s strength and use it against them.',
    source: 'Kobe Bryant',
    citation: 'The Mamba Mentality: How I Play',
    year: '2018'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney'
  }
  ];



/***
 * `getRandomQuote` function
***/

function getRandomQuote(array) { 
  var quoteIndex = Math.floor(Math.random() * quotes.length); // Random number generator
  for (var i = 0; i < array.length; i++) { 
    var randomQuote = array[quoteIndex]; 
  } 
  return randomQuote; // Returns random quote
}

var result = getRandomQuote(quotes); 

/***
 * `printQuote` function
***/
function printQuote() {
  var result = getRandomQuote(quotes);//calling the random quote generator
  var message = "<p class='quote'>" + result.quote + "</p>" + "<p class='source'>" + result.source + "";//initial print to HTML
  if (result.citation !== undefined) {
    message += "<span class='citation'>" + result.citation + "";
  };//for quotes with citation
  if (result.year !== undefined) {
    message += "<span class='year'>" + result.year + "";
  };//for quotes with year cited
  message += "</p>";//close the last paragraph
  document.getElementById('quote-box').innerHTML = message; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
