var main = function() {

  $(".vertical-nav").hover(function() {
    $(".active").addClass('elementHovered');

    $(".active").hover(function() {
      $(this).removeClass('elementHovered');
    }, function() {
      $(this).addClass('elementHovered');
    });
  }, function() {
    $(".active").removeClass('elementHovered');
  });

  if($(".left-nav").data("startOpen") == false) {
    $('.nav-drawer-toggle').clickToggle(function() {
      $(".left-nav").animate({
        left: 0
      }, 100);
    },
    function() {
      $(".left-nav").animate({
        left: -220
      }, 100);
    });
  } else if($(".left-nav").data("startOpen") == true) {
    $('.nav-drawer-toggle').clickToggle(function() {
      $(".left-nav").animate({
        left: -220
      }, 100);
    },
    function() {
      $(".left-nav").animate({
        left: 0
      }, 100);
    });
  }
}

$(document).ready(main);
