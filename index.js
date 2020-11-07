
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

//---------------------

//MODALE

document.getElementById("dwnld").onclick = function () { hide() };

function hide() {
  var y = setTimeout(function () {
    document.getElementById("dwnld").setAttribute("data-dismiss", "modal");
  }, 1000);
  clearTimeout(y)
}
//---------------------


//MAPPA

function mapsSelector() {
  if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPad") != -1) ||
    (navigator.platform.indexOf("iPod") != -1))
    // window.open("maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
    window.open("maps://maps.google.com/maps?q=Via+Chiabrera+39+Roma");
  else /* else use Google */
    window.open("http://maps.google.com/?q=Via+Chiabrera+39+Roma");
}
//--------------------------


