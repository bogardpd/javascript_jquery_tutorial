function init() {
  var mapOptions = {
    center: new google.maps.LatLng(40.782710,-73.965310),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  var venueMap;
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
    var script = document.createElement('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyBAqPN8qQZoXx0WX1HISvLImWQuWqYvxYc&callback=init';
    document.body.appendChild(script);
}

window.onload = loadScript;