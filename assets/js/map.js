let map;
let markersArray = [];

// initMap function is fired when the google map script is read in index.html
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

// called via eventListeners that pass in the array that holds the objects in map-consts.js
function dropMarkers(arrayName) {
    clearMarkers();
    // calls addMarker on each object / element in the array
    for (let i = 0; i < arrayName.length; i++) {
        addMarker(arrayName[i]);
    };
}

// adds markers - called while looping through dropMarkers()
function addMarker(placeObj) {
    const marker = new google.maps.Marker({
        position: placeObj.location,
        map: map,
        title: placeObj.name,
        icon: placeObj.iconImage
    });
    // push marker info to markersArray which we use to show & delete multiple markers
    markersArray.push(marker);

    // following block adds info windows to each marker - walkthrough: Eamonn Smyth, How to Google maps
    // contentString is the template for each info window - add ${}
    let contentString = `<h3>window title</h3><p>window info</p><a>window website</a>`;
    // add info window and its properties
    const infowindow = new google.maps.InfoWindow({
        maxWidth: 300,
        content: contentString
    });

    // event listener to open info window when marker is clicked
    marker.addListener('click', function() {
        //closes windows that are open (seperate function - btm)
        closeWindows();
        // opens the window & then sets itself to infoObj - this we clear in closeWindows()
        infowindow.open(map, marker);
        infoObj[0] = infowindow;
    });
    // stores infowindow info & gets wiped by closeWindows()
    infoObj = [];
}

// when called (in dropMarkers) loops through markersArray and deletes existing markers
function clearMarkers() {
    // removes marker off map
    for (let i = 0; i < markersArray.length; i++) {
       markersArray[i].setMap(null);
    };
    // clears array (deletes marker)
    markersArray = [];
}

// called when a marker is clicked (addMarker())
function closeWindows() {
    // clears infoObj array / removing previously opened window 
    if (infoObj.length > 0) {
        infoObj[0].close();
        infoObj[0].length = 0;
    };
}