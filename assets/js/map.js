// function is fired when script is read on index.html
function initMap() {
    // jQ defines center point
    const jQ = {
        lat: 52.4871,
        lng: -1.9125
    };
    // renders map
    const map = new google.maps.Map(document.getElementById('map'), {
        center: jQ,
        zoom: 15,
        mapTypeId: 'terrain'
    });
}