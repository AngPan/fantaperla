

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





// let deferredPrompt; // Allows to show the install prompt
// // const installButton = document.getElementById("install_button");
// // const installButton = document.getElementById("install_button");
// const installButton = $('#install_button');


// window.addEventListener("beforeinstallprompt", e => {
//   console.log("beforeinstallprompt fired");
//   // Prevent Chrome 76 and earlier from automatically showing a prompt
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   // Show the install button
//   // installButton.hidden = false;
//   installButton.addEventListener("click", installApp);
// });


// function installApp() {
//   // Show the prompt
//   deferredPrompt.prompt();
//   installButton.disabled = true;

//   // Wait for the user to respond to the prompt
//   deferredPrompt.userChoice.then(choiceResult => {
//     if (choiceResult.outcome === "accepted") {
//       console.log("PWA setup accepted");
//       // installButton.hidden = true;
//     } else {
//       console.log("PWA setup rejected");
//     }
//     installButton.disabled = false;
//     deferredPrompt = null;
//   });
// }




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
  if (event.target.matches('.install-butt')) {
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











