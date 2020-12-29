
window.addEventListener('load', e => {
  new PWAConfApp();
  registerSW();
});

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      alert('ServiceWorker registration failed. Sorry about that.');
    }
  } else {
    document.querySelector('.alert').removeAttribute('hidden');
  }
}






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


