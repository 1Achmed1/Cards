var main = function() {

  $(".header-link-container").click(function() {
    window.location.href = $(this).children().attr('href');
  });
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
