(function() {
    $('#hamburger').on('click', function() {
      $(this).toggleClass('close');
      $('#nav').toggleClass('visible');
    });
  });