var main = function() {

  $(".header-link-container").click(function() {
    window.location.href = $(this).children().attr('href');
  });
}

$(document).ready(main);
