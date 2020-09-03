(function () {

var names = ["Subas", "John", "Jen", "Jason", "supriya", "Frank", "Larry", "Paula", "Laura", "Jim", "jenisha", "sita"];
for (var i = 0; i < names.length; i++) {
var firstLetter = names[i].charAt(0).toLowerCase();
if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
