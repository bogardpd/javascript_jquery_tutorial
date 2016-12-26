function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

function updateHotel(hotel, element) {
  var details = hotel.name + ' rooms: ';
  details += hotel.checkAvailability();
  var el = document.getElementById(element);
  el.textContent = details;
}

var quayHotel = new Hotel('Quay', 40, 25)
var parkHotel = new Hotel('Park', 120, 77)

updateHotel(quayHotel, 'hotel1');
updateHotel(parkHotel, 'hotel2');