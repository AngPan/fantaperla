const openMaps = document.getElementById('openMaps');

openMaps.addEventListener('click', async() => {
    function mapsSelector() {
        if /* if we're on iOS, open in Apple Maps */ ((navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPad") != -1) ||
            (navigator.platform.indexOf("iPod") != -1))
            window.open("maps://maps.google.com/maps?daddr=41.86697063813626,12.593170911655806&amp;ll=");
        else /* else use Google */
            window.open("https://maps.google.com/maps?daddr=41.86697063813626,12.593170911655806&amp;ll=");
    }
});

//41.86697063813626, 12.593170911655806