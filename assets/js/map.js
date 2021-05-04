let map;
let markersArray = [];

// initMap function is fired when the google map script is read on index.html
function initMap() {
    // jQ is the center point
    const jQ = {
        lat: 52.487137777478495,
        lng: -1.9097842445407542
    };
    // renders map in #map div
    map = new google.maps.Map(document.getElementById('map'), {
        center: jQ,
        zoom: 14.5,
        mapTypeId: 'terrain',
        disableDefaultUI: true
    });
}

// gets called via the button in the html
// loops through the selected array firing the addMarker function on every loop
function dropMarkers(markersArray) {
    clearMarkers();
    for (let i = 0; i < markersArray.length; i++) {
        addMarker(markersArray[i]);
    };
}

// fired while looping through dropMarkers() / adds marker info to markersArray
function addMarker(arrayName) {
    let marker = new google.maps.Marker({
    position: arrayName.location,
    map: map,
    //title: arrayName.name,
    icon: arrayName.iconImage,
    });
    //pushes info into the markersArray which we use to delete/show multiple markers
    markersArray.push(marker);
}

// when called (in dropMarkers) loops through markersArray and and clears it
function clearMarkers() {
    for (let i = 0; i < markersArray.length; i++) {
       markersArray[i].setMap(null); 
    };
}