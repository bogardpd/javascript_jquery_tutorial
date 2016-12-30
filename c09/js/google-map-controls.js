function init() {
  var mapOptions = {
    center: new google.maps.LatLng(40.782710,-73.965310),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 14,
    
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT
    },
    scaleControl: true,
    scaleControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: false,
    overviewMapControl: false
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