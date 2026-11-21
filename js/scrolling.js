$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hostname !== window.location.hostname || this.pathname !== window.location.pathname) {
      return;
    }

    var id = (this.hash || '').slice(1);
    if (!id || !/^[A-Za-z][\w:-]*$/.test(id)) {
      return;
    }

    var target = document.getElementById(id);
    if (!target) {
      return;
    }

    event.preventDefault();

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800, function () {
      window.location.hash = '#' + id;
    });
  });
});
