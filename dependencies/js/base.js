var main = function() {
  $('.icon-open').click(function() {
    $('.darken-icon').css("background-color", "rgb(0, 121, 107)");
    $('.sliding-nav').animate({
      left: "0px"
    }, 150);
  });

  $(".footer").click(function() {
      $("span").text('Click to Close the Footer');
  });
};

$(document).ready(main);
