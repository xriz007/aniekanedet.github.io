var i = 0;
var txt = 'Hi, I\'m Aniekan Edet. a Frontend Developer based in Uyo, Nigeria.';
var speed = 70;

function typeWriter() {
  var el = document.getElementById('type');
  if (!el) {
    return;
  }
  if (i < txt.length) {
    el.textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
