
function init() {
  console.log("INIT");

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


  export const pwaTrackingListeners = () => {
    const fireAddToHomeScreenImpression = event => {
      fireTracking("Add to homescreen shown");
      //will not work for chrome, untill fixed
      event.userChoice.then(choiceResult => {
        fireTracking(`User clicked ${choiceResult}`);
      });
      //This is to prevent `beforeinstallprompt` event that triggers again on `Add` or `Cancel` click
      window.removeEventListener(
        "beforeinstallprompt",
        fireAddToHomeScreenImpression
      );
    };
    window.addEventListener("beforeinstallprompt", fireAddToHomeScreenImpression);

    //Track web app install by user
    window.addEventListener("appinstalled", event => {
      fireTracking("PWA app installed by user!!! Hurray");
    });

    //Track from where your web app has been opened/browsed
    window.addEventListener("load", () => {
      let trackText;
      if (navigator && navigator.standalone) {
        trackText = "Launched: Installed (iOS)";
      } else if (matchMedia("(display-mode: standalone)").matches) {
        trackText = "Launched: Installed";
      } else {
        trackText = "Launched: Browser Tab";
      }
      fireTracking(track);
    });
  };

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


}









