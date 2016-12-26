var msg = '<h2>browser window</h2>';
msg += '<p>width: ' + window.innerWidth + ' px</p>';
msg += '<p>height: ' + window.innerHeight + ' px</p>';
msg += '<h2>history</h2>';
msg += '<p>items: ' + window.history.length + '</p>';
msg += '<h2>screen</h2>';
msg += '<p>width: ' + window.screen.width + ' px</p>';
msg += '<p>height: ' + window.screen.height + ' px</p>';

var el = document.getElementById('info');
el.innerHTML = msg;

alert('Current page: ' + window.location);