var href = $(".header-link-container").children().attr('href');

var os = (function() {
    var ua = navigator.userAgent.toLowerCase();
    return {
        isWin2K: /windows nt 5.0/.test(ua),
        isXP: /windows nt 5.1/.test(ua),
        isVista: /windows nt 6.0/.test(ua),
        isWin7: /windows nt 6.1/.test(ua),
        isWin8: /windows nt 6.2/.test(ua),
        isWin81: /windows nt 6.3/.test(ua),
        isWin10: /windows nt 10/.test(ua),
        isMac: /mac/.test(ua)
    };
}());

var main = function() {

  $(".header-link-container").click(function() {
    window.location.href = $(this).children().attr('href');
  });

  var rippleElement = $(".ripple");
  rippleElement.css("background-color", rippleElement.data("color"));

  if(os.isWin7) {
    $(".left-part").addClass('win7');
    $("li[active]").addClass('win7');
  }
}

var footerToggle = function() {
  function open() {
    $(".footer").click(function() {
        $("#footerspan").text(footerClose);
        $("#footerArrow").attr('class','fa fa-caret-up');
        $(this).attr('toggled','true')
        close();
    });
  }

  function close() {
    $(".footer").click(function() {
        $("#footerspan").text(footerOpen);
        $("#footerArrow").attr('class','fa fa-caret-down');
        $(this).removeAttr('toggled');
        open();
    });
  }

  open();
}

$(document).ready(footerToggle);
$(document).ready(main);

var header = $(".header");
var subtitle = $(".header-subtitle");
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 29) {
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
      // $(".left-part").append('<span class="header-subtitle"><p>by Andrew Ward</p></span>');
    }
});

(function (window, $) {

  $(function() {


    $('.ripple').on('click', function (event) {
      event.preventDefault();

      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;



      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");

      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });

  });

})(window, jQuery);
