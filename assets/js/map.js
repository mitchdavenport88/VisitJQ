let map;

// function is fired when script is read on index.html
function initMap() {
    // jQ is the center point
    const jQ = {
        lat: 52.487137777478495,
        lng: -1.9097842445407542
    };
    // renders map
    map = new google.maps.Map(document.getElementById('map'), {
        center: jQ,
        zoom: 14.5,
        mapTypeId: 'terrain',
        disableDefaultUI: true
    });    
}

function addMarker(arr) {
    let marker = new google.maps.Marker({
        position: arr.location,
        map: map,
        title: arr.name
    });
}

function dropMarker(arrayName) {
    for (let i = 0; i < arrayName.length; i++) {
        addMarker(arrayName[i]);
    };
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