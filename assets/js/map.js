// sets default recommend-content in HTML
window.addEventListener("load", setDefaultText);

const recommendContentContainer = document.getElementsByClassName('recommend-content');
// defaults recommend-content
function setDefaultText() {
    for (i = 0; i < recommendContentContainer.length; i++) {
        recommendContentContainer[i].innerHTML = 
        `<h3 class="recommend-content-title">Visit JQ Recommends</h3>
        <hr>
        <p class="recommend-content-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laborum eum veniam 
            voluptatibus quidem ad, hic qui, aperiam magnam, delectus voluptatum ipsum inventore 
            laudantium tenetur! Vel nam dolore dolores perspiciatis?
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
function dropMarkers(arrayName) {
    map.panTo(jQ);
    map.setZoom(14.5);
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

    // add info window and its properties
    const infowindow = new google.maps.InfoWindow({
        maxWidth: 400,
        content: 
        `<div class="info-window">
            <h5>${placeObj.name}</h5>
            <h6>${placeObj.title}</h6>
            <p>${placeObj.desc}</p>
            <a href="${placeObj.website}" target="_blank">Click here to visit website</a>
        </div>`
    });

    // walkthrough: Eamonn Smyth, How to Google maps
    // event listener to open info window when marker is clicked
    marker.addListener('click', function () {
        // pans so the marker is in the middle
        map.panTo(placeObj.location);
        //closes windows that are open (seperate function - btm)
        closeWindows();
        // opens the window & then sets itself to infoObj - this we clear in closeWindows()
        infowindow.open(map, marker);
        infoObj[0] = infowindow;
    });
    // stores infowindow info & gets wiped by closeWindows()
    infoObj = [];

    // event listener to change text in recommend-content
    marker.addListener('click', function () {
        if (placeObj.reviewTitle && placeObj.review) {
           for (i = 0; i < recommendContentContainer.length; i++) {
                recommendContentContainer[i].innerHTML = 
                `<h3 class="recommend-content-title">${placeObj.reviewTitle}</h3>
                <hr>
                <p class="recommend-content-p">${placeObj.review}</p>`;
            }; 
        } else {
            setDefaultText();
        };
    });
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

//  eventListeners
travelButton.addEventListener('click', function() {
    setDefaultText();
    dropMarkers(travelArray);
});
foodButton.addEventListener('click', function() {
    setDefaultText();
    dropMarkers(foodArray);
});
drinkButton.addEventListener('click', function() {
    setDefaultText();
    dropMarkers(drinkArray);
});
sleepButton.addEventListener('click', function() {
    setDefaultText();
    dropMarkers(sleepArray);
});
toDoButton.addEventListener('click', function() {
    setDefaultText();
    dropMarkers(toDoArray);
});