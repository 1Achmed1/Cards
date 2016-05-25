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

var header = $(".header");
var nav = $(".left-nav");
var subtitle = $(".header-subtitle");
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 34) {
      header.attr('class', 'card header-scrolled');
      subtitle.remove();

      if(os.isWin7) {
        $(".left-part").removeClass('win7');
        $("li[active]").addClass('win7');
      }

      if($(".headerImg").length) {

      } else {
        $(".left-part").prepend('<div class="headerImg"><img src="dependencies/img/logo.png" alt="Logo here" height="40px"></div>');
      }
    } else {
      header.attr('class', 'card header');
      if(os.isWin7) {
        $(".left-part").addClass('win7');
        $("li[active]").addClass('win7');
      }

      if($(".headerImg").length) {
        $(".headerImg").remove();
      }
    }

    if(scroll >= 65) {
      nav.addClass('fixed');
    } else {
      nav.removeClass('fixed');
    }
});

$(document).ready(main);
