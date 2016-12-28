function checkLength(e, minLength) {
  var el, elMsg;
  if (!e) {                       // If event object doesn't exist
    e = window.event;             // Use IE fallback
  }
  el = e.target || e.srcElement;  // Get target of event
  elMsg = el.nextSibling;
  
  if (el.value.length < minLength) {
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {
    elMsg.innerHTML = '';
  }
}

var elUsername = document.getElementById('username');
if (elUsername.addEventListener) {
  elUsername.addEventListener('blur', function(e) {checkLength(e, 5);}, false);
} else {
  elUsername.attachEvent('onblur', function(e) {checkLength(e, 5);});
}