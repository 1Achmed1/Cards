var href = $(".header-link-container").children("a").attr('href');
var targetPage = "";

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

function setTheme() {
  if($(".meta-title").data("theme").length) {
    $(".container").css('background-color', '#212121');
  }
}

function toastToggle() {
  $(".dismissToast").click(function() {
    var closingToast = $(this).parent(".toast").animate({
      opacity: 0,
      bottom: -50
    }, 300, function() {
      $(".toast").css("display", "none");
    });
  });

  $(".showToast").click(function() {
    var targetToast = "#" + $(this).data("toastTarget");
    $(targetToast).css("display", "block");
    $(targetToast).animate({
      opacity: 100,
      bottom: 10
    }, 300);
  });
}

function showOpenToast() {
  $(".toast.opened").animate({
    opacity: 100,
    bottom: 10
  }, 300);
}

function bottomNav() {
  $(".bottom-nav-link").click(function(){
    var href = $(this).find("a").attr('href');
    window.location.href = href;
  });
}

function footerToggle() {
  open();

  function open() {
    $("[datarole='footer']").click(function() {
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
}

function fixChipWidth() {
  var chipSpan = $(".chip span");
  var chip = chipSpan.parent();
  var chipSpanWidth = chipSpan.width();
  // alert(chipSpanWidth);
  var chipWidth = chipSpanWidth + 50;
  chip.width(chipWidth);
}

function other() {
  $(".ripple").css("background-color", $(this).data("color"));

  if(os.isWin7) {
    $(".left-part").addClass('win7');
    $("li[active]").addClass('win7');
  }
}

$(document).ready(function() {
  showOpenToast();

  $(".footer").data("hover", "false");
  $(".header").data("hover", "false");

  footerToggle();
  other();
  fixChipWidth();

  $('.tooltip').tooltipster({
    animation: 'slide',
    delay: 200,
    touchDevices: false,
    trigger: 'hover',
    arrow: false
  });

  setTheme();
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
