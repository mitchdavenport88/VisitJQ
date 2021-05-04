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
    // drops markers for train / tram stations onload
    dropMarker(travel);
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

let markersArray = [];

// gathers info while looping through the object & uses said info to place mark / add info with dot notation
function addMarker(arr) {
    let marker = new google.maps.Marker({
    position: arr.location,
    map: map,
    title: arr.name,
    animation: google.maps.Animation.DROP,
    });
    //pushes info into an array which we then use to delete markers
    markersArray.push(marker);
}

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

const other = [{location: {lat: 52.4847, lng: -1.9116}, name: 'Pen Museum'},
               {location: {lat: 52.4833, lng: -1.9140}, name: 'Church'}
];

const travel = [{location: {lat: 52.4898, lng: -1.9129}, name: 'Train Station'},
               {location: {lat: 52.4879, lng: -1.9040}, name: 'St Pauls Tram Stop'}
];

/* // final obj's
const objDrink = [
    // button factory
    {location: {lat: 52.4859748503573, lng: -1.911887096396719}, 
    name: 'Button Factory'}, 
    // 40 st pauls
    {location: {lat: 52.48628191834437, lng: -1.90588967705836}, 
    name: '40 St Paul\'s'},
    // the clifden
    {location: {lat: 52.49053818291137, lng: -1.9090654124942905}, 
    name: 'The Clifden'},
    // the church inn
    {location: {lat: 52.4897411854693, lng: -1.9080998172563377}, 
    name: 'The Church Inn'},
    // rose villa tavern
    {location: {lat: 52.487203398063805, lng: -1.912272653529681}, 
    name: 'Rose Villa Tavern'},
    // the pig & tail
    {location: {lat: 52.48475021851283, lng: -1.914261644540896}, 
    name: 'The Pig & Tail'},
    // 1000 trades
    {location: {lat: 52.48527290076547, lng: -1.9115579778360996}, 
    name: '1000 Trades'},
    // actress & bishop
    {location: {lat: 52.48460055345065, lng: -1.9047363887208995}, 
    name: 'Actress & Bishop'}
];

const objEat = [
    // lasan
    {location: {lat: 52.485233583417745, lng: -1.907818886868876}, 
    name: 'Lasan'}, 
    // cucino rustica
    {location: {lat: 52.48478930352097, lng: -1.904278370988886}, 
    name: 'Cucino Rustica'}, 
    // otto
    {location: {lat: 52.486494529859975, lng: -1.9077867003608273}, 
    name: 'Otto Wood Fired Pizza'}, 
    // hen & chickens
    {location: {lat: 52.48724097715667, lng: -1.9022578733768014}, 
    name: 'Hen & Chickens'}, 
    // the wilderness
    {location: {lat: 52.48742190894782, lng: -1.910550273376769}, 
    name: 'The Wilderness'}, 
    // devon house
    {location: {lat: 52.48817237425163, lng: -1.9086907887207132}, 
    name: 'Devon House Jamacian Restaurant'}, 
    // soda bread cafe
    {location: {lat: 52.4848962851702, lng: -1.905125102212869}, 
    name: 'Soda Bread Cafe'}, 
    // 3 threes
    {location: {lat: 52.48916110530588, lng: -1.907403086868705}, 
    name: '3 Three\'s Coffee Lounge'}
];

const objToDo = [
    // burning soul brewery
    {location: {lat: 52.489142096340736, lng: -1.9054979818528697}, 
    name: 'Burning Soul Brewery'}, 
    // rock & roll brewhouse
    {location: {lat: 52.48805127534349, lng: -1.9088433291967155}, 
    name: 'Rock & Roll Brewhouse'}, 
    // museum of the jq
    {location: {lat: 52.49071773670097, lng: -1.9121763110283405}, 
    name: 'Museum of the Jewellery Quarter'}, 
    // pen museum
    {location: {lat: 52.48466955237686, lng: -1.9115684022128796}, 
    name: 'Pen Museum'}, 
    // jam house
    {location: {lat: 52.48518301767432, lng: -1.9047868157048553}, 
    name: 'The Jam House'}, 
    // the quarterworkshop
    {location: {lat: 52.48214766486217, lng: -1.9074573598849893}, 
    name: 'The Quarterworkshop'}, 
    // church
    {location: {lat: 52.484885306136476, lng: -1.9062986455695912}, 
    name: 'St. Paul\'s Church'}, 
    // chamberlain clock
    {location: {lat: 52.487245044652205, lng: -1.912838244540768}, 
    name: 'Chamberlain Clock'}
];

const objSleep = [
    // frederick street townhouse
    {location: {lat: 52.486154447304486, lng: -1.9118621157048172}, 
    name: 'Frederick Street Townhouse'}, 
    // st pauls house , 
    {location: {lat: 52.48584591466117, lng: -1.9050990733768165}, 
    name: 'St. Pauls House'}, 
    // hatters hostel , 
    {location: {lat: 52.48656458322476, lng: -1.9042729530048232}, 
    name: 'Hatters Hostel'}, 
    // travelodge
    {location: {lat: 52.48364848711359, lng: -1.9069400310489426}, 
    name: 'Travelodge Newhall Street'}, 
    // staycity aparthotels
    {location: {lat: 52.48317152221384, lng: -1.9075837612089317}, 
    name: 'Staycity Aparthotels'}, 
    // bloc hotel
    {location: {lat: 52.48630778013889, lng: -1.9078760868688185}, 
    name: 'Bloc Hotel'}, 
    // ibis styles
    {location: {lat: 52.48200195625742, lng: -1.9065645217889486}, 
    name: 'Hotel ibis Styles'}, 
    // kettleworks
    {location: {lat: 52.48606604605024, lng: -1.917875362050885}, 
    name: 'The Kettleworks'}
]; */