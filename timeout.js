
//TIMEOUT

// Set the date we're counting down to
var countDownDate = new Date("Oct 9, 2020 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Display the result in the element with id="demo"
  if (document.getElementById("timer")) {
    document.getElementById("timer").reinnerHTML = "- " + days + " GIORNI ALL' ASTA";
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").remove();
  }
}, 1000);