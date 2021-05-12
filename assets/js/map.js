// sets default recommend-content in HTML
const recContentDefault = document.getElementsByClassName('recommend-content');
window.addEventListener("load", setDefaultText);
// defaults recommend-content
function setDefaultText() {
    for (i = 0; i < recContentDefault.length; i++) {
        recContentDefault[i].innerHTML = 
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
    };
}

let map;
let markersArray = [];
// jQ is the center point
const jQ = {lat: 52.487137777478495, lng: -1.9097842445407542};

// initMap function is fired when the google map script is read in index.html
function initMap() {
    // renders map in #map div
    map = new google.maps.Map(document.getElementById('map'), {
        center: jQ,
        zoom: 14.5,
        mapTypeId: 'terrain',
        disableDefaultUI: true
    });
}

// called via eventListeners that pass in the array that holds the objects in map-consts.js
function dropMarkers(placeType) {
    map.panTo(jQ);
    map.setZoom(14.5);
    clearMarkers();
    // calls addMarker on each object / element in the array
    for (let i = 0; i < placeType.length; i++) {
        addMarker(placeType[i]);
    };
}

// adds markers - called while looping through dropMarkers()
function addMarker(place) {
    const marker = new google.maps.Marker({
        position: place.location,
        map: map,
        title: place.name,
        icon: place.iconImage
    });
    // push marker info to markersArray which we use to show & delete multiple markers
    markersArray.push(marker);
    // add info window and its properties
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
    // walkthrough: Eamonn Smyth, How to Google maps
    // event listener to open info window when marker is clicked
    marker.addListener('click', function () {
        // pans so the marker is in the middle
        map.panTo(place.location);
        //closes windows that are open (seperate function - btm)
        closeWindows();
        // opens the window & then sets itself to infoObj - this we clear in closeWindows()
        infowindow.open(map, marker);
        infoObj[0] = infowindow;
        // changes text next to map to read selected info
        changeDefaultText(place);
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

function changeDefaultText(place) {
    if (place.reviewTitle && place.review) {
        for (i = 0; i < recContentDefault.length; i++) {
            recContentDefault[i].innerHTML = 
            `<h3 class="recommend-content-title">${place.reviewTitle}</h3>
            <hr class="divider">
            <p class="recommend-content-p">${place.review}</p>`;
        };
    } else if (place.addInfo) {
        for (i = 0; i < recContentDefault.length; i++) {
            recContentDefault[i].innerHTML = 
            `<h3 class="recommend-content-title">${place.name}</h3>
            <hr class="divider">
            <p class="recommend-content-p">${place.addInfo}</p>
            <hr>
            <a href="${place.website}" target="_blank">Click here for timetables, journey planners and any other additional info.</a>`;
        };
    } else {
        setDefaultText();
    };
}

//  eventListeners
travelButton.addEventListener('click', function() {
    setDefaultText();
    dropMarkers(jewelleryQuarterPlaces.travel);
});
foodButton.addEventListener('click', function() {
    setDefaultText();
    dropMarkers(jewelleryQuarterPlaces.food);
});
drinkButton.addEventListener('click', function() {
    setDefaultText();
    dropMarkers(jewelleryQuarterPlaces.drink);
});
sleepButton.addEventListener('click', function() {
    setDefaultText();
    dropMarkers(jewelleryQuarterPlaces.sleep);
});
toDoButton.addEventListener('click', function() {
    setDefaultText();
    dropMarkers(jewelleryQuarterPlaces.toDo);
});