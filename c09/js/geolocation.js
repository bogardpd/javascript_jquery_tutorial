var elMap = document.getElementById('loc');
var msg = 'Sorry, we were unable to get your location.';

if (Modernizr.geolocation) {
  navigator.geolocation.getCurrentPosition(success, fail);
  elMap.textContent = 'Checking location...';
}

function success(position) {
  msg = "<table>";
  msg += "<tr><td>Longitude</td><td>" + position.coords.longitude.toFixed(6) + "&deg;</td></tr>";
  msg += "<tr><td>Latitude</td><td>" + position.coords.latitude.toFixed(6) + "&deg;</td></tr>";
  msg += "<tr><td>Accuracy</td><td>" + position.coords.accuracy + " m</td></tr>";
  msg += "<tr><td>Altitude</td><td>" + position.coords.altitude + " m</td></tr>";
  msg += "<tr><td>Altitude Accuracy</td><td>" + position.coords.altitudeAccuracy + " m</td></tr>";
  msg += "</table>";
  
  
  elMap.innerHTML = msg;
}

function fail(msg) {
  elMap.textContent = msg;
  console.log(msg.code);
}
