var i = 0;
var txt = 'Hi, I\'m Aniekan Edet. a Frontend Developer based in Uyo, Nigeria.';
var speed = 250;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();