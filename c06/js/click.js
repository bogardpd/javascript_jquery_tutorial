var msg = '<div class=\"header\"><a id=\"close\" href=\"#\">close X</a></div>';
msg += 'Our servers are being updated between 3 and 4 AM. ';
msg += 'During this time, there may be minor disruptions to service.';

var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dismissNote() {
  document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);
