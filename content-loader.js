var fakeHash = window.location.hash;
var withoutHashtag = fakeHash.substring(fakeHash.indexOf("#")+1);
// var contentDir = "content";
// var fileEndings = ".html";
// var setUpCompleted = true;
// var websiteTitle = "Fallback Title - Check Parse Config!";

Parse.initialize("mv92aPVI3IBCMc7ADRwLjmCnlA428GngmPiJ2w1Y", "Dmbv4dcBLOKDRofP1Uukk5clO3F2U4gFdQCjpKH6");

Parse.Config.get().then(function(config) {
  var websiteTitle = config.get("websiteTitle");
  var setUpCompleted = config.get("setUpCompleted");
  var contentDir = config.get("contentDir");
  var fileEndings = config.get("fileEndings");
}, function(error) {
  // Something went wrong (e.g. request timed out)
  alert(error);
});

function loader() {
  if($(".container").length) {

  } else {
    if(withoutHashtag.length) {
      if(typeof specialFiles[withoutHashtag] == 'undefined' || specialFiles[withoutHashtag] === null){
        $("body").load(contentDir + '/' + withoutHashtag + fileEndings, function() {
          $(".loader").remove();
          var getTitle = $(".meta-title").data("title") + " - "+ websiteTitle;
          document.title = getTitle;
          if(!$(".meta-title").length){
            document.title = titleFallback;
          }
        });
      } else {
        $("body").load(contentDir + '/' + specialFiles[withoutHashtag][0] + "." + specialFiles[withoutHashtag][1], function() {
          $(".loader").remove();
          var getTitle = $(".meta-title").data("title") + " - "+ websiteTitle;
          document.title = getTitle;
          if(!$(".meta-title").length) {
            document.title = titleFallback;
          }
        });
      }
    } else {
      $("body").load(contentDir + '/index' + fileEndings, function() {
        $(".loader").remove();
        var getTitle = $(".meta-title").data("title") + " - "+ websiteTitle;
        document.title = getTitle;
        if(!$(".meta-title").length){
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

function showOpenToast(){
  $(".toast.opened").animate({
    opacity: 100,
    bottom: 10
  }, 300);
}

$(document).ready(function(){
  showOpenToast();
  setTimeout(loader, 3000);
  if(setUpCompleted == false) {
    window.location.replace("#setup");
  }
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
