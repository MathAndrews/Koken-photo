function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 46.205855, lng: 6.147017}
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var infoWindow = new google.maps.InfoWindow;

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {

    var infowincontent = document.createElement('div');
    var strong = document.createElement('strong');
    strong.textContent = location.name || ''
    infowincontent.appendChild(strong);
    infowincontent.appendChild(document.createElement('br'));

    var text = document.createElement('text');
    text.textContent = location.link || ''
    infowincontent.appendChild(text);

    console.log(location);

    var marker = new google.maps.Marker({
      position: location,
      label: location.name
    });


    marker.addListener('click', function() {
      infoWindow.setContent(infowincontent);
      infoWindow.open(map, marker);
    });

    return marker;
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: '/storage/themes/air/images/maps/m'});
}