var fakeHash = window.location.hash;
var withoutHashtag = fakeHash.substring(fakeHash.indexOf("#") + 1);


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
          subtitlePlacementCorrection();
        });
      } else {
        $("body").load(contentDir + '/' + specialFiles[withoutHashtag][0] + "." + specialFiles[withoutHashtag][1], function() {
          $(".loader").remove();
          var getTitle = $(".meta-title").data("title") + " - " + websiteTitle;
          document.title = getTitle;
          if (!$(".meta-title").length) {
            document.title = titleFallback;
          }
          subtitlePlacementCorrection();
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
        subtitlePlacementCorrection();
      });
    }
  }
}

function pageChangeLoader(targetPage) {
  if(targetPage.length) {
    $("body").empty();
    $("body").load(contentDir + '/' + targetPage + fileEndings, function() {
      $(".loader").remove();
      var getTitle = $(".meta-title").data("title") + " - " + websiteTitle;
      document.title = getTitle;
      if (!$(".meta-title").length) {
        document.title = titleFallback;
      }
      subtitlePlacementCorrection();
    });
  }
}

function subtitlePlacementCorrection() {
  if ($('.header-subtitle').length) {
    $('.left-part').css({"display": "block", "vertical-align": "middle", "margin-top": "0px", "margin-left": "4px"});
  }
}

$(document).ready(function() {
  setTimeout(loader, 500);

  other();
});

$(window).bind('hashchange', function(e) {
  $(".container").remove();
  $("body").empty();
  $("body").load("index.html");
  var mPreSubstringHash = window.location.hash;
  var mSubtringHash = mPreSubstringHash.substring(mPreSubstringHash.indexOf("#") + 1);
  setTimeout(pageChangeLoader(mSubtringHash), 500);
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
