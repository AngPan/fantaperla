

window.addEventListener('load', e => {
  // new PWAConfApp();
  registerSW();
});

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log("ServiceWorker registration failed.");
    }
  } else {
    document.querySelector('.alert').removeAttribute('hidden');
  }
}





window.addEventListener('beforeinstallprompt', function (event) {
  // not show the default browser install app prompt
  event.preventDefault();

  // add the banner here or make it visible
  // …

  // save the event to use it later
  // (it has the important prompt method and userChoice property)
  window.promptEvent = event;
});


document.addEventListener('click', function (event) {
  if (event.target.matches('.install-trigger')) {
    addToHomeScreen();
  }
});

function addToHomeScreen() {
  // show the install app prompt
  window.promptEvent.prompt();

  // handle the Decline/Accept choice of the user
  window.promptEvent.userChoice.then(function (choiceResult) {
    // hide the prompt banner here
    // …

    if (choiceResult.outcome === 'accepted') {
      console.info('mm User accepted the A2HS prompt');
    } else {
      console.info('mm User dismissed the A2HS prompt');
    }

    window.promptEvent = null;
  });
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











