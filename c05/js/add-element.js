var position = document.getElementsByTagName('ul')[0];
var toAdd = "one two three four five six seven eight nine".split(" ");

for (var i = 0; i < toAdd.length; i++) {
  var newEl = document.createElement('li');
  var newText = document.createTextNode(toAdd[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);
}
