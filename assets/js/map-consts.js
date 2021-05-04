const travelArray = [
    // jq train station
    {location: {lat: 52.4901528320036, lng: -1.9128514235878478}, 
    name: 'Jewellery Quarter Train Station', 
    iconImage: 'assets/images/custom-markers/travel-marker.png'}, 
    // st pauls tram
    {location: {lat: 52.4878009740022, lng: -1.9045687621959868}, 
    name: 'St. Paul\'s Tram Station', 
    iconImage: 'assets/images/custom-markers/travel-marker.png'},
    // st chads tram
    {location: {lat: 52.48539672250407, lng: -1.900320143140058}, 
    name: 'St. Chad\'s Tram Station', 
    iconImage: 'assets/images/custom-markers/travel-marker.png'},
    // ncp newhall st car park
    {location: {lat: 52.48486097459022, lng: -1.9067359870446474}, 
    name: 'NCP Newhall St. Car Park', 
    iconImage: 'assets/images/custom-markers/parking-marker.png'},
    // northwood st car park
    {location: {lat: 52.485945530560144, lng: -1.9082809394286215}, 
    name: 'Northwood St. Car Park', 
    iconImage: 'assets/images/custom-markers/parking-marker.png'},
    // multi storey
    {location: {lat: 52.48864289135307, lng: -1.9123442850248518}, 
    name: 'Jewellery Quarter Multi Storey', 
    iconImage: 'assets/images/custom-markers/parking-marker.png'}
];

const foodArray = [
    // lasan
    {location: {lat: 52.485233583417745, lng: -1.907818886868876}, 
    name: 'Lasan', 
    iconImage: 'assets/images/custom-markers/food-marker.png'}, 
    // cucino rustica
    {location: {lat: 52.48478930352097, lng: -1.904278370988886}, 
    name: 'Cucino Rustica', 
    iconImage: 'assets/images/custom-markers/food-marker.png'}, 
    // otto
    {location: {lat: 52.486494529859975, lng: -1.9077867003608273}, 
    name: 'Otto Wood Fired Pizza', 
    iconImage: 'assets/images/custom-markers/food-marker.png'}, 
    // hen & chickens
    {location: {lat: 52.48724097715667, lng: -1.9022578733768014}, 
    name: 'Hen & Chickens', 
    iconImage: 'assets/images/custom-markers/food-marker.png'}, 
    // the wilderness
    {location: {lat: 52.48742190894782, lng: -1.910550273376769}, 
    name: 'The Wilderness', 
    iconImage: 'assets/images/custom-markers/food-marker.png'}, 
    // devon house
    {location: {lat: 52.48817237425163, lng: -1.9086907887207132}, 
    name: 'Devon House Jamacian Restaurant', 
    iconImage: 'assets/images/custom-markers/food-marker.png'}, 
    // soda bread cafe
    {location: {lat: 52.4848962851702, lng: -1.905125102212869}, 
    name: 'Soda Bread Cafe', 
    iconImage: 'assets/images/custom-markers/coffee-marker.png'}, 
    // 3 threes
    {location: {lat: 52.48916110530588, lng: -1.907403086868705}, 
    name: '3 Three\'s Coffee Lounge', iconImage: 'assets/images/custom-markers/coffee-marker.png'}
];

const drinkArray = [
    // button factory
    {location: {lat: 52.4859748503573, lng: -1.911887096396719}, 
    name: 'Button Factory', 
    iconImage: 'assets/images/custom-markers/cocktail-marker.png'}, 
    // 40 st pauls
    {location: {lat: 52.48628191834437, lng: -1.90588967705836}, 
    name: '40 St. Paul\'s', 
    iconImage: 'assets/images/custom-markers/cocktail-marker.png'},
    // the clifden
    {location: {lat: 52.49053818291137, lng: -1.9090654124942905}, 
    name: 'The Clifden', 
    iconImage: 'assets/images/custom-markers/drink-marker.png'},
    // the church inn
    {location: {lat: 52.4897411854693, lng: -1.9080998172563377}, 
    name: 'The Church Inn', 
    iconImage: 'assets/images/custom-markers/drink-marker.png'},
    // rose villa tavern
    {location: {lat: 52.487203398063805, lng: -1.912272653529681}, 
    name: 'Rose Villa Tavern', 
    iconImage: 'assets/images/custom-markers/drink-marker.png'},
    // the pig & tail
    {location: {lat: 52.48475021851283, lng: -1.914261644540896}, 
    name: 'The Pig & Tail', 
    iconImage: 'assets/images/custom-markers/drink-marker.png'},
    // 1000 trades
    {location: {lat: 52.48527290076547, lng: -1.9115579778360996}, 
    name: '1000 Trades', 
    iconImage: 'assets/images/custom-markers/cocktail-marker.png'},
    // actress & bishop
    {location: {lat: 52.48460055345065, lng: -1.9047363887208995}, 
    name: 'Actress & Bishop', 
    iconImage: 'assets/images/custom-markers/drink-marker.png'}
];

const toDoArray = [
    // burning soul brewery
    {location: {lat: 52.489142096340736, lng: -1.9054979818528697}, 
    name: 'Burning Soul Brewery', iconImage: 'assets/images/custom-markers/drink-marker.png'}, 
    // rock & roll brewhouse
    {location: {lat: 52.48805127534349, lng: -1.9088433291967155}, 
    name: 'Rock & Roll Brewhouse', 
    iconImage: 'assets/images/custom-markers/drink-marker.png'}, 
    // museum of the jq
    {location: {lat: 52.49071773670097, lng: -1.9121763110283405}, 
    name: 'Museum of the Jewellery Quarter', 
    iconImage: 'assets/images/custom-markers/explore-marker.png'}, 
    // pen museum
    {location: {lat: 52.48466955237686, lng: -1.9115684022128796}, 
    name: 'Pen Museum', 
    iconImage: 'assets/images/custom-markers/explore-marker.png'}, 
    // jam house
    {location: {lat: 52.48518301767432, lng: -1.9047868157048553}, 
    name: 'The Jam House', 
    iconImage: 'assets/images/custom-markers/cocktail-marker.png'}, 
    // the quarterworkshop
    {location: {lat: 52.48214766486217, lng: -1.9074573598849893}, 
    name: 'The Quarterworkshop', 
    iconImage: 'assets/images/custom-markers/explore-marker.png'}, 
    // church
    {location: {lat: 52.484885306136476, lng: -1.9062986455695912}, 
    name: 'St. Paul\'s Church', 
    iconImage: 'assets/images/custom-markers/church-marker.png'}, 
    // chamberlain clock
    {location: {lat: 52.487245044652205, lng: -1.912838244540768}, 
    name: 'Chamberlain Clock', 
    iconImage: 'assets/images/custom-markers/explore-marker.png'}
];

const sleepArray = [
    // frederick street townhouse
    {location: {lat: 52.486154447304486, lng: -1.9118621157048172}, 
    name: 'Frederick Street Townhouse', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // st pauls house
    {location: {lat: 52.48584591466117, lng: -1.9050990733768165}, 
    name: 'St. Paul\'s House', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // hatters hostel
    {location: {lat: 52.48656458322476, lng: -1.9042729530048232}, 
    name: 'Hatters Hostel', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // travelodge
    {location: {lat: 52.48364848711359, lng: -1.9069400310489426}, 
    name: 'Travelodge Newhall Street', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // staycity aparthotels
    {location: {lat: 52.48317152221384, lng: -1.9075837612089317}, 
    name: 'Staycity Aparthotels', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // bloc hotel
    {location: {lat: 52.48630778013889, lng: -1.9078760868688185}, 
    name: 'Bloc Hotel', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // ibis styles
    {location: {lat: 52.48200195625742, lng: -1.9065645217889486}, 
    name: 'Hotel ibis Styles', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // kettleworks
    {location: {lat: 52.48606604605024, lng: -1.917875362050885}, 
    name: 'The Kettleworks', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}
];