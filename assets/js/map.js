let map;

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

// gets called onclick using the button in the html, where the name of the object is passed
// clearMarker() is called first to delete any markers that exsist on the map
// for loop loops through the selected object firing the addMarker function on every loop
function dropMarker(markersArray) {
    clearMarker();
    for (let i = 0; i < markersArray.length; i++) {
        addMarker(markersArray[i]);
    };
}

// gathers info while looping through the object & uses said info to place mark / add info with dot notation
function addMarker(arr) {
    let marker = new google.maps.Marker({
    position: arr.location,
    map: map,
    title: arr.name
    });
    //pushes info into an array which we then use to delete markers
    markersArray.push(marker);
}

let markersArray = [];

// deletes any markers that exsist on the map
function clearMarker() {
    for (let i = 0; i < markersArray.length; i++) {
       markersArray[i].setMap(null); 
    };
    markersArray = [];
}

// TEST CONST's
const bars = [{location: {lat: 52.4859, lng: -1.9119}, name: 'Button Factory'},
              {location: {lat: 52.4845, lng: -1.9043}, name: 'Cucino Rustica'}
];

const food = [{location: {lat: 52.4865, lng: -1.9077}, name: 'Otto'},
              {location: {lat: 52.4852, lng: -1.9078}, name: 'Lasan'}
];

const toDo = [{location: {lat: 52.4885, lng: -1.9006}, name: 'MMA'},
              {location: {lat: 52.4908, lng: -1.9121}, name: 'Museum'}
];

const other = [{location: {lat: 52.4898, lng: -1.9129}, name: 'Train Station'},
               {location: {lat: 52.4833, lng: -1.9140}, name: 'Church'}
];    