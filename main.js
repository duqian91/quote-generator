var randomSixDigit = Math.floor(Math.random() * 1000000);
var forismaticAPIURL = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&key=" + randomSixDigit + "&lang=en&jsonp=?";

function randomQuote (){
    $.getJSON(forismaticAPIURL, function(data) {
      $("#quote").html(data.quoteText);
      $("#author").html(data.quoteAuthor);
      $("#tweet").attr("href", ("https://twitter.com/intent/tweet?text=" + data.quoteText + "-- " + data.quoteAuthor));
    });
}

$(document).ready(randomQuote);
$
$("#generate").on("click", randomQuote);
