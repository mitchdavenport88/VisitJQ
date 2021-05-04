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

// gets called onclick using the button in the html, where the place type is passed
// clearMarker() is called first to delete any markers that exsist on the map
// for loop loops through the selected object firing the addMarker function on every loop
function dropMarkers(markersArray) {
    clearMarkers();
    for (let i = 0; i < markersArray.length; i++) {
        addMarker(markersArray[i]);
    };
}

// deletes any markers that exsist on the map
function clearMarkers() {
    for (let i = 0; i < markersArray.length; i++) {
       markersArray[i].setMap(null); 
    };
    markersArray = [];
}

// gathers info while looping through the object & uses said info to place mark / add info with dot notation
function addMarker(arrayName) {
    let marker = new google.maps.Marker({
    position: arrayName.location,
    map: map,
    title: arrayName.name,
    icon: arrayName.iconImage,
    animation: google.maps.Animation.DROP,
    });
    //pushes info into an array which we then use to delete markers
    markersArray.push(marker);
}