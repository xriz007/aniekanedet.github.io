(function () {
  'use strict';

  if (typeof SmoothScroll === 'function') {
    new SmoothScroll('a[href*="#"]');
  }

  if (typeof AOS !== 'undefined') {
    AOS.init({
      offset: 200,
      duration: 1000
    });
  }

  document.querySelectorAll('.js-open-resume').forEach(function (button) {
    button.addEventListener('click', function () {
      var resume = window.open('assets/doc/Resume.pdf', '_blank', 'noopener,noreferrer');
      if (resume) {
        resume.opener = null;
      }
    });
  });

  if (!window.jQuery) {
    return;
  }

  jQuery(function ($) {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });

    $('form.contact-form').on('submit', function (event) {
      event.preventDefault();
    });
  });
})();
