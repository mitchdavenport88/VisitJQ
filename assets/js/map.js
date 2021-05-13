// recommend-content class in HTML
const recContentDefault = document.getElementsByClassName('recommend-content');

/**
 * setDefaultText sets the default html in recommend-content class (to the right / under the map)
 */
function setDefaultText() {
    recContentDefault[0].innerHTML = 
    `<h3 class="recommend-content-title">Visit JQ Recommends</h3>
    <hr class="divider">
    <p class="recommend-content-p">
        Museums, heritage, creativity and culture. The JQ is bursting with activities and 
        new experiences.
    </p>
    <hr>
    <p class="recommend-content-p">
        Use our interactive map to help plan your visit and view our top picks. Click on one 
        of the buttons above the map to start!
    </p>`;
}

// sets default html onload
window.addEventListener("load", setDefaultText);

let map;

let markersArray = [];

// jQ is the center point
const jQ = {
    lat: 52.487137777478495,
    lng: -1.9097842445407542
};

/**
 * initMap function is fired when the google map script is read in index.html
 */
function initMap() {
    // renders map in #map div
    map = new google.maps.Map(document.getElementById('map'), {
        center: jQ,
        zoom: 14.5,
        mapTypeId: 'terrain',
        disableDefaultUI: true
    });
}

/**
 * dropMarkers places markers on the map - called via eventListeners
 * @param {Array} placeType - extracted from jewelleryQuarterPlaces object in map-consts.js
 */
function dropMarkers(placeType) {
    map.panTo(jQ);
    map.setZoom(14.5);
    clearMarkers();
    for (let i = 0; i < placeType.length; i++) {
        addMarker(placeType[i]);
    }
}

/**
 * addMarker is called while looping through dropMarkers() and adds marker icon to each location
 * @param {Object} place - extracted from placeType array, which holds the data of each place
 */
function addMarker(place) {
    const marker = new google.maps.Marker({
        position: place.location,
        map: map,
        title: place.name,
        icon: place.iconImage
    });

    // push marker info to markersArray which we use to show & delete multiple markers
    markersArray.push(marker);

    // add an info window that uses data from place object for display
    const infowindow = new google.maps.InfoWindow({
        maxWidth: 400,
        content: 
        `<div class="info-window">
            <h5>${place.name}</h5>
            <h6>${place.title}</h6>
            <p>${place.desc}</p>
            <a href="${place.website}" target="_blank">Click here to visit website</a>
        </div>`
    });

    // walkthrough: Eamonn Smyth, How to Google maps via slack
    marker.addListener('click', function () {
        map.panTo(place.location);
        closeWindows();
        infowindow.open(map, marker);
        // sets itself to infoObj that we clear in closeWindows()
        infoObj[0] = infowindow;
        // changes the default html in recommend-content class
        changeDefaultText(place);
    });
    infoObj = [];
}

// 
/**
 * this function loops through markersArray and deletes existing markers by clearing the array
 */
function clearMarkers() {
    for (let i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
    }
    markersArray = [];
}

/**
 * this function closes previously opened infoWindows by clearing the infoObj array
 */
function closeWindows() {
    if (infoObj.length > 0) {
        infoObj[0].close();
        infoObj[0].length = 0;
    }
}

/**
 * changeDefaultText replaces the default html in recommend-content class with either a reveiw or additional info
 * @param {Object} place - extracted from placeType array, which holds the data of each place
 */
function changeDefaultText(place) {
    if (place.reviewTitle && place.review) {
        recContentDefault[0].innerHTML = 
        `<h3 class="recommend-content-title">${place.reviewTitle}</h3>
        <hr class="divider">
        <p class="recommend-content-p">${place.review}</p>`;
    } else if (place.addInfo) {
        recContentDefault[0].innerHTML = 
        `<h3 class="recommend-content-title">${place.name}</h3>
        <hr class="divider">
        <p class="recommend-content-p">${place.addInfo}</p>
        <hr>
        <a href="${place.website}" target="_blank">Click here for timetables, journey planners and any other additional info.</a>`;
    } else {
        setDefaultText();
    }
}

//  eventListeners
travelButton.addEventListener('click', function () {
    setDefaultText();
    dropMarkers(jewelleryQuarterPlaces.travel);
});

foodButton.addEventListener('click', function () {
    setDefaultText();
    dropMarkers(jewelleryQuarterPlaces.food);
});

drinkButton.addEventListener('click', function () {
    setDefaultText();
    dropMarkers(jewelleryQuarterPlaces.drink);
});

sleepButton.addEventListener('click', function () {
    setDefaultText();
    dropMarkers(jewelleryQuarterPlaces.sleep);
});

toDoButton.addEventListener('click', function () {
    setDefaultText();
    dropMarkers(jewelleryQuarterPlaces.toDo);
});