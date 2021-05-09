const travelArray = [
    // jq train station
    {location: {lat: 52.4901528320036, lng: -1.9128514235878478}, 
    name: 'Jewellery Quarter Train Station', 
    title: 'Train Station', 
    desc: 'Dedicated station with connections to local towns and cities such as Stratford, Solihull and London.', 
    website: 'https://www.nationalrail.co.uk/stations/JEQ/details.html', 
    iconImage: 'assets/images/custom-markers/travel-marker.png'}, 
    // st pauls tram
    {location: {lat: 52.4878009740022, lng: -1.9045687621959868}, 
    name: 'St. Paul\'s Metro Stop', 
    title: 'Metro Stop', 
    desc: 'West Midland Metro services operate at frequent intervals. St. Chad\'s Metro stop is just a minutes ride away.', 
    website: 'https://westmidlandsmetro.com/journey-planner/', 
    iconImage: 'assets/images/custom-markers/travel-marker.png'},
    // st chads tram
    {location: {lat: 52.48539672250407, lng: -1.900320143140058}, 
    name: 'St. Chad\'s Metro Stop', 
    title: 'Metro Stop', 
    desc: 'West Midland Metro services operate at frequent intervals. St. Paul\'s Metro stop is just a minutes ride away.', 
    website: 'https://westmidlandsmetro.com/journey-planner/', 
    iconImage: 'assets/images/custom-markers/travel-marker.png'},
    // ncp newhall st car park
    {location: {lat: 52.48486097459022, lng: -1.9067359870446474}, 
    name: 'NCP Newhall St. Car Park', 
    title: '24hr NCP Car Park', 
    desc: 'Located next to St Paul’s church, the Newhall Street car park is within walking distance of most attractions.', 
    website: 'https://www.ncp.co.uk/find-a-car-park/car-parks/birmingham-newhall-street/', 
    iconImage: 'assets/images/custom-markers/parking-marker.png'},
    // northwood st car park
    {location: {lat: 52.485945530560144, lng: -1.9082809394286215}, 
    name: 'Northwood St. Car Park', 
    title: 'Pay & Display Car Park', 
    desc: 'Operated by Euro Car Parks this car park offers 24/7 covered parking starting at £1.00 for 2 hours.', 
    website: 'https://www.parkme.com/en-gb/lot/203189/northwood-street-car-park-birmingham-uk', 
    iconImage: 'assets/images/custom-markers/parking-marker.png'},
    // multi storey
    {location: {lat: 52.48864289135307, lng: -1.9123442850248518}, 
    name: 'Jewellery Quarter Multi Storey', 
    title: 'Large Covered Car Park', 
    desc: 'This Birmingham City Council multi storey is open Monday to Saturday, 6am to 8:30pm and closed on Sundays.', 
    website: 'https://www.birmingham.gov.uk/directory_record/6669/jewellery_quarter_multi-storey_car_park', 
    iconImage: 'assets/images/custom-markers/parking-marker.png'}
];

const foodArray = [
    // lasan
    {location: {lat: 52.485233583417745, lng: -1.907818886868876}, 
    name: 'Lasan', 
    title: 'Indian Fine Dining & Cocktail Bar', 
    desc: 'Nouveau Indian food in split-level contemporary room with bare wood and neutral colour scheme.', 
    website: 'https://lasan.co.uk/', 
    iconImage: 'assets/images/custom-markers/food-marker.png'}, 
    // cucino rustica
    {location: {lat: 52.48478930352097, lng: -1.904278370988886}, 
    name: 'Cucino Rustica', 
    title: 'Italian Restaurant', 
    desc: 'Stylish Italian restaurant with chalkboard specials, dark wood tables, a bar and an outdoor terrace.', 
    website: 'https://cucinarustica.co.uk/', 
    iconImage: 'assets/images/custom-markers/food-marker.png'}, 
    // otto
    {location: {lat: 52.486494529859975, lng: -1.9077867003608273}, 
    name: 'Otto Wood Fired Pizza', 
    title: 'Pizzeria', 
    desc: 'Homey spot for specialty pizzas, charcuterie & vegetable boards plus wine & house cocktails.', 
    website: 'https://ottopizza.uk/', 
    iconImage: 'assets/images/custom-markers/food-marker.png'}, 
    // hen & chickens
    {location: {lat: 52.48724097715667, lng: -1.9022578733768014}, 
    name: 'Hen & Chickens', 
    title: 'Cask & Curry', 
    desc: 'Warmly lit, casual gastro pub for traditional Indian fare such as curry dishes plus beer & wine.', 
    website: 'https://henandchickens.co.uk/', 
    iconImage: 'assets/images/custom-markers/food-marker.png'}, 
    // the wilderness
    {location: {lat: 52.48742190894782, lng: -1.910550273376769}, 
    name: 'The Wilderness', 
    title: 'British Fine Dining', 
    desc: 'Modern British fine dining establishment cooking seasonal ingredients and serving in a calm space.', 
    website: 'https://www.wearethewilderness.co.uk/menu', 
    iconImage: 'assets/images/custom-markers/food-marker.png'}, 
    // devon house
    {location: {lat: 52.48817237425163, lng: -1.9086907887207132}, 
    name: 'Devon House', 
    title: 'Authentic Jamacian Food & Bar', 
    desc: 'Serving a wide range of authentic Caribbean food marinated and cooked with some of the most natural seasonings and herbs with home made sauces.', 
    website: 'https://www.devonhouse.co.uk/', 
    iconImage: 'assets/images/custom-markers/food-marker.png'}, 
    // soda bread cafe
    {location: {lat: 52.4848962851702, lng: -1.905125102212869}, 
    name: 'Soda Bread Cafe', 
    title: 'Cafe', 
    desc: 'Traditional cafe for homemade breakfast, hot lunches and cakes, made with carefully sourced ingredients.', 
    website: 'https://www.sodabreadcafe.com/', 
    iconImage: 'assets/images/custom-markers/coffee-marker.png'}, 
    // 3 threes
    {location: {lat: 52.48916110530588, lng: -1.907403086868705}, 
    name: '3 Three\'s', 
    title: 'Vegan Coffee Lounge', 
    desc: 'No frills coffee shop with bean bag seating & classic beverages alongside prepared food & pastries.', 
    website: 'https://www.3threescoffee.com/', 
    iconImage: 'assets/images/custom-markers/coffee-marker.png'}
];

const drinkArray = [
    // button factory
    {location: {lat: 52.4859748503573, lng: -1.911887096396719}, 
    name: 'Button Factory', 
    title: 'Cocktails w/ Roof Terrace', 
    desc: 'Renovated Victorian factory now housing a contemporary venue featuring coffees and robata grills.', 
    website: 'https://thebuttonfactorybirmingham.co.uk/', 
    iconImage: 'assets/images/custom-markers/cocktail-marker.png'}, 
    // 40 st pauls
    {location: {lat: 52.48628191834437, lng: -1.90588967705836}, 
    name: '40 St. Paul\'s', 
    title: 'Gin Bar', 
    desc: 'World Gin Bar of the Year, 2019. Multi award winning G&T/Cocktail bar. 24 seats. 140 gins. Booking highly recommended.', 
    website: 'https://www.40stpauls.co.uk/', 
    iconImage: 'assets/images/custom-markers/cocktail-marker.png'},
    // the clifden
    {location: {lat: 52.49053818291137, lng: -1.9090654124942905}, 
    name: 'The Clifden', 
    title: 'Pub', 
    desc: 'Dynamic venue known for its urban street art, 6 HD screens for sports fans and hearty all-day menu.', 
    website: 'https://theclifden.pub/', 
    iconImage: 'assets/images/custom-markers/drink-marker.png'},
    // the church inn
    {location: {lat: 52.4897411854693, lng: -1.9080998172563377}, 
    name: 'The Church Inn', 
    title: 'Pub', 
    desc: 'Soul food is served in this once traditional pub now hip go-to with eclectic-decor and roof terrace.', 
    website: 'https://www.thechurchinnjq.com/', 
    iconImage: 'assets/images/custom-markers/drink-marker.png'},
    // rose villa tavern
    {location: {lat: 52.487203398063805, lng: -1.912272653529681}, 
    name: 'Rose Villa Tavern', 
    title: 'Pub', 
    desc: 'Refurbished boozer with an ornate interior boasting ceramic tiles, wooden floors and stained glass.', 
    website: 'https://therosevillatavern.co.uk/', 
    iconImage: 'assets/images/custom-markers/drink-marker.png'},
    // the pig & tail
    {location: {lat: 52.48475021851283, lng: -1.914261644540896}, 
    name: 'The Pig & Tail', 
    title: 'Craft Beer', 
    desc: 'Airy pub serving British small plates, craft beer and cocktails in an stylish, modern space.', 
    website: 'https://www.thepigandtail.co.uk/', 
    iconImage: 'assets/images/custom-markers/drink-marker.png'},
    // 1000 trades
    {location: {lat: 52.48527290076547, lng: -1.9115579778360996}, 
    name: '1000 Trades', 
    title: 'Independant Bar & Kitchen', 
    desc: 'Bar & kitchen in an old jewellery workshop celebrating craft in its dishes, produce and range of drinks.', 
    website: 'https://1000trades.org.uk/', 
    iconImage: 'assets/images/custom-markers/cocktail-marker.png'},
    // actress & bishop
    {location: {lat: 52.48460055345065, lng: -1.9047363887208995}, 
    name: 'Actress & Bishop', 
    title: 'Live Music Pub', 
    desc: 'Birmingham\'s premiere independant live music venue and late night bar.', 
    website: 'http://theactressandbishop.co.uk/', 
    iconImage: 'assets/images/custom-markers/drink-marker.png'}
];

const toDoArray = [
    // burning soul brewery
    {location: {lat: 52.489142096340736, lng: -1.9054979818528697}, 
    name: 'Burning Soul Brewery', 
    title: 'Brewery Tours & Taproom', 
    desc: 'Unique experience to tour a working brewery led by knowledgeable and passionate guides. More importantly though, fantastic beer!', 
    website: 'https://burningsoulbrewing.com/', 
    iconImage: 'assets/images/custom-markers/drink-marker.png'}, 
    // rock & roll brewhouse
    {location: {lat: 52.48805127534349, lng: -1.9088433291967155}, 
    name: 'Rock & Roll Brewhouse', 
    title: 'Taproom', 
    desc: 'A quirky brewery taproom bedecked with music memorabilia. Beers brewed on site!', 
    website: 'https://whatpub.com/pubs/BIR/3645/rock-roll-brewhouse-birmingham', 
    iconImage: 'assets/images/custom-markers/drink-marker.png'}, 
    // museum of the jq
    {location: {lat: 52.49071773670097, lng: -1.9121763110283405}, 
    name: 'Museum of the Jewellery Quarter', 
    title: 'Local History', 
    desc: 'This Museum is one of the nine museums run by the Birmingham Museums Trust, celebrating local history.', 
    website: 'https://www.birminghammuseums.org.uk/jewellery', 
    iconImage: 'assets/images/custom-markers/explore-marker.png'}, 
    // pen museum
    {location: {lat: 52.48466955237686, lng: -1.9115684022128796}, 
    name: 'Pen Museum', 
    title: 'Museum', 
    desc: 'The only museum in the United Kingdom devoted to the history of the pen making industry.', 
    website: 'https://penmuseum.org.uk/', 
    iconImage: 'assets/images/custom-markers/explore-marker.png'}, 
    // jam house
    {location: {lat: 52.48518301767432, lng: -1.9047868157048553}, 
    name: 'The Jam House', 
    title: 'Live Music Venue', 
    desc: 'Big-name jazz, blues and rock acts in intimate 3-storey Georgian building with top-floor restaurant.', 
    website: 'https://thejamhouse.com/', 
    iconImage: 'assets/images/custom-markers/cocktail-marker.png'}, 
    // the quarterworkshop
    {location: {lat: 52.48214766486217, lng: -1.9074573598849893}, 
    name: 'The Quarterworkshop', 
    title: 'Make Your Own Jewellery', 
    desc: 'The Quarterworkshop is a jewellery design workshop specialising in jewellery making experiences.', 
    website: 'https://thequarterworkshop.com/', 
    iconImage: 'assets/images/custom-markers/explore-marker.png'}, 
    // church
    {location: {lat: 52.484885306136476, lng: -1.9062986455695912}, 
    name: 'St. Paul\'s Church', 
    title: 'CoE Church', 
    desc: 'St. Paul\'s sits in Birmingham\'s only remaining Georgian Square and offers an oasis of calm in a busy city.', 
    website: 'https://www.stpaulsjq.church/', 
    iconImage: 'assets/images/custom-markers/church-marker.png'}, 
    // chamberlain clock
    {location: {lat: 52.487245044652205, lng: -1.912838244540768}, 
    name: 'Chamberlain Clock', 
    title: 'Edwardian Clock Tower', 
    desc: 'Cast-iron clock tower erected in 1903 to mark Joseph Chamberlain\'s tour of South Africa in 1902-03.', 
    website: 'https://en.wikipedia.org/wiki/Chamberlain_Clock', 
    iconImage: 'assets/images/custom-markers/explore-marker.png'}
];

const sleepArray = [
    // frederick street townhouse
    {location: {lat: 52.486154447304486, lng: -1.9118621157048172}, 
    name: 'Frederick Street Townhouse', 
    title: 'Boutique B&B', 
    desc: 'All rooms are designed to make you feel right at home with comfortable beds, spacious showers and bath tubs.', 
    website: 'https://frederickstreettownhouse.co.uk/', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // st pauls house
    {location: {lat: 52.48584591466117, lng: -1.9050990733768165}, 
    name: 'St. Paul\'s House', 
    title: 'Georgian Redbrick Guesthouse', 
    desc: 'Restaurant, bar and boutique hotel. Situated in the heart of the Jewellery Quarter on Saint Pauls Square.', 
    website: 'https://www.saintpaulshouse.com/sleep/', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // hatters hostel
    {location: {lat: 52.48656458322476, lng: -1.9042729530048232}, 
    name: 'Hatters Hostel', 
    title: 'Hostel', 
    desc: 'Lively city hostel with funky modern touches.', 
    website: 'https://hattershostels.com/birmingham-livery-street/', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // travelodge
    {location: {lat: 52.48364848711359, lng: -1.9069400310489426}, 
    name: 'Travelodge Newhall Street', 
    title: 'Hotel', 
    desc: 'This simple hotel is just a short walk away from the centre of the JQ.', 
    website: 'https://www.travelodge.co.uk/hotels/379/Birmingham-Central-Newhall-Street-hotel', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // staycity aparthotels
    {location: {lat: 52.48317152221384, lng: -1.9075837612089317}, 
    name: 'Staycity Aparthotels', 
    title: 'Serviced Apartments', 
    desc: 'Apartments which deliver the perfect blend of home and hotel. Available for as short or as long as you like.', 
    website: 'https://www.staycity.com/birmingham/newhall-square/', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // bloc hotel
    {location: {lat: 52.48630778013889, lng: -1.9078760868688185}, 
    name: 'Bloc Hotel', 
    title: 'Hip Budget Hotel', 
    desc: 'Offering ultra-modern décor, the BLOC Hotel\'s rooms are inspired by Japanese space-saving design.', 
    website: 'https://www.blochotels.com/birmingham', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // ibis styles
    {location: {lat: 52.48200195625742, lng: -1.9065645217889486}, 
    name: 'Hotel ibis Styles', 
    title: 'Hotel', 
    desc: 'This simple hotel is just a short walk away from the centre of the JQ.', 
    website: 'https://all.accor.com/hotel/9130/index.en.shtml', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}, 
    // kettleworks
    {location: {lat: 52.48606604605024, lng: -1.917875362050885}, 
    name: 'The Kettleworks', 
    title: 'Serviced Apartments', 
    desc: 'Serviced apartments that deliver stylish and comfortable accommodation with lovely touches like plush sofas and Smart TVs.', 
    website: 'https://www.silverdoorapartments.com/kettleworks-serviced-apartments-birmingham-15934/', 
    iconImage: 'assets/images/custom-markers/stay-marker.png'}
];