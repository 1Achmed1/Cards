var fakeHash = window.location.hash;
var withoutHashtag = fakeHash.substring(fakeHash.indexOf("#") + 1);
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

function loader() {
  if ($(".container").length) {

  } else {
    if (withoutHashtag.length) {
      if (typeof specialFiles[withoutHashtag] == 'undefined' || specialFiles[withoutHashtag] === null) {
        $("body").load(contentDir + '/' + withoutHashtag + fileEndings, function() {
          $(".loader").remove();
          var getTitle = $(".meta-title").data("title") + " - " + websiteTitle;
          document.title = getTitle;
          if (!$(".meta-title").length) {
            document.title = titleFallback;
          }
        });
      } else {
        $("body").load(contentDir + '/' + specialFiles[withoutHashtag][0] + "." + specialFiles[withoutHashtag][1], function() {
          $(".loader").remove();
          var getTitle = $(".meta-title").data("title") + " - " + websiteTitle;
          document.title = getTitle;
          if (!$(".meta-title").length) {
            document.title = titleFallback;
          }
        });
      }
    } else {
      $("body").load(contentDir + '/index' + fileEndings, function() {
        $(".loader").remove();
        var getTitle = $(".meta-title").data("title") + " - " + websiteTitle;
        document.title = getTitle;
        if (!$(".meta-title").length) {
          document.title = titleFallback;
        }
      });
    }
  }

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

function footerToggle() {
  open();

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
  setTimeout(loader, 3000);
  if (setUpCompleted == false) {
    window.location.replace("#setup");
  }

  $(".footer").data("hover", "false");
  $(".header").data("hover", "false");

  footerToggle();
  other();
});

$(window).bind('hashchange', function() {
  location.reload();
});

(function($) {
  $.fn.clickToggle = function(func1, func2) {
    var funcs = [func1, func2];
    this.data('toggleclicked', 0);
    this.click(function() {
      var data = $(this).data();
      var tc = data.toggleclicked;
      $.proxy(funcs[tc], this)();
      data.toggleclicked = (tc + 1) % 2;
    });
    return this;
  };
}(jQuery));

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
