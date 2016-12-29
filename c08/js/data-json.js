var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);
    
    // Build up string with new content
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) {
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" '
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br />';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }
    
    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;
  }
}

xhr.open('GET', 'data/data.json', true);
xhr.send(null);