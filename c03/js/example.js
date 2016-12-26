/* The script is placed inside an immediately invoked function expression
which helps protect the scope of variables. */

(function() {
  
  // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS
  
  // Create a hotel object using object literal syntax
  var hotel = {
    name:       'Park',
    roomRate:   240,  // Amount in dollars
    discount:   15,   // Percentage discount
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  };
  
  // Write out the hotel name, standard rate, and the special rate
  var hotelName, roomRate, specialRate;
  
  hotelName   = document.getElementById('hotelName');
  roomRate    = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');
  
  hotelName.textContent   = hotel.name;
  roomRate.textContent    = '$' + hotel.roomRate.toFixed(2);
  specialRate.textContent = '$' + hotel.offerPrice();
  
  // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
  
  var expiryMsg;  // Message displayed to users
  var today;      // Today's date
  var elEnds;     // The element that shows the message about the offer ending
  
  function offerExpires(today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    
    // Add seven days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Collect the parts of the date to show on the page
    day   = dayNames[weekFromToday.getDay()];
    date  = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year  = weekFromToday.getFullYear();
    
    // Create the message
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
    
  }
  
  today = new Date();
  elEnds = document.getElementById('offerEnds');
  elEnds.innerHTML = offerExpires(today);
  
}()); // Finish the immediately invoked function expression