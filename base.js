var href1 = $(".header-link1").attr('href');
var href2 = $(".header-link2").attr('href');
var href3 = $(".header-link3").attr('href');
var href4 = $(".header-link4").attr('href');

var main = function() {
  $('.header-link-container1').click(function() {
    window.location.href = href1;
  });

  $('.header-link-container2').click(function() {
    window.location.href = href2;
  });

  $('.header-link-container3').click(function() {
    window.location.href = href3;
  });

  $('.header-link-container4').click(function() {
    window.location.href = href4;
  });

  if(navigator.userAgent.toUpperCase().indexOf('MAC') >= 0) {
    $(".left-part").addClass('mac');
    $("li[active]").addClass('mac');
  }
}

var footerToggle = function() {
  function open() {
    $(".footer").click(function() {
        $("#footerspan").text('Click to Close the Footer');
        $("#footerArrow").attr('class','fa fa-caret-up');
        $(this).attr('toggled','true')
        close();
    });
  }

  function close() {
    $(".footer").click(function() {
        $("#footerspan").text('Click to Open the Footer');
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

    if(scroll >= 30) {
      header.attr('class', 'card header-scrolled');
      subtitle.remove();

      if(navigator.userAgent.toUpperCase().indexOf('MAC') >= 0) {
        $(".left-part").removeClass('mac');
        $("li[active]").addClass('mac');
      }

      if($(".headerImg").length) {

      } else {
        $(".left-part").prepend('<div class="headerImg"><img src="dependencies/img/logo.png" alt="Logo here" height="40px"></div>');
      }

      if($(".headerTitle").length) {
        $(this).remove();
      }
    } else {
      header.attr('class', 'card header');
      if(navigator.userAgent.toUpperCase().indexOf('MAC') >= 0) {
        $(".left-part").addClass('mac');
        $("li[active]").addClass('mac');
      }

      if($(".headerImg").length) {
        $(".headerImg").remove();
      }

      if($(".headerTitle").length) {

      } else {
        $(".leftpart").prepend('<span class="headerTitle">Cards</span>');
      }
      // $(".left-part").append('<span class="header-subtitle"><p>by Andrew Ward</p></span>');
    }
});
