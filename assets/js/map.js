// recommend-content class is a section in the html (to the right / under the map)
const reccomendContentSection = document.getElementsByClassName('recommend-content');
/** sets the default html in recommend-content class on load */
function setDefaultText() {
    reccomendContentSection[0].innerHTML = 
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
window.addEventListener("load", setDefaultText);

// walkthroughs & tutorials: 
// Eamonn Smyth - How to Google maps PDF via slack & Pradip Debnath - https://youtu.be/Xptz0GQ2DO4
// Google Maps JavaScript API documentation | Developers console 
// Sam Codes - https://youtu.be/uPhWSyRqQDA & Traversy Media - https://youtu.be/Zxf1mnP5zcw

let map;
let markersArray = [];

// jQ is the center point
const jQ = {
    lat: 52.487137777478495,
    lng: -1.9097842445407542
};

/** initMap function is fired when the google map script is read in index.html*/
function initMap() {
    // renders map in #map div in html
    map = new google.maps.Map(document.getElementById('map'), {
        center: jQ,
        zoom: 14.5,
        mapTypeId: 'terrain',
        disableDefaultUI: true
    });
}

/**
 * places markers on the map. called via eventListeners which pass in placeType
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
 * collects data from the object place. we use this data to position markers, add and show info to 
 * the infoWindows and change the content in the recommend-content div
 * @param {Object} place - extracted from placeType array, which holds all the data of each place
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

    marker.addListener('click', function () {
        map.panTo(place.location);
        closeWindows();
        infowindow.open(map, marker);
        // sets itself to infoObj[0] that we clear using closeWindows()
        infoObj[0] = infowindow;
        changeDefaultText(place);
    });
    infoObj = [];
}

/** this function loops through markersArray and deletes existing markers by clearing the array */
function clearMarkers() {
    for (let i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
    }
    markersArray = [];
}

/** this function closes previously opened infoWindows by clearing the infoObj array */
function closeWindows() {
    if (infoObj.length > 0) {
        infoObj[0].close();
        infoObj[0].length = 0;
    }
}

/**
 * replaces the default html in recommend-content div with either a reveiw or additional info
 * @param {Object} place - extracted from placeType array, which holds the data of each place
 */
function changeDefaultText(place) {
    if (place.reviewTitle && place.review) {
        reccomendContentSection[0].innerHTML = 
        `<h3 class="recommend-content-title">${place.reviewTitle}</h3>
        <hr class="divider">
        <p class="recommend-content-p">${place.review}</p>`;
    } else if (place.addInfo) {
        reccomendContentSection[0].innerHTML = 
        `<h3 class="recommend-content-title">${place.name}</h3>
        <hr class="divider">
        <p class="recommend-content-p">${place.addInfo}</p>
        <hr>
        <a href="${place.website}" target="_blank">Click here for timetables, journey planners and any other additional info.</a>`;
    } else {
        setDefaultText();
    }
}

// eventListeners - buttons already declared in script.js
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