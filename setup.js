Parse.Config.get().then(function(config) {
  var websiteTitle = config.get("websiteTitle");
  var setUpCompleted = config.get("setUpCompleted");
  var contentDir = config.get("contentDir");
  var fileEndings = config.get("fileEndings");

  if(websiteTitle !== "undefined" || setUpCompleted == "false" || contentDir !== "undefined" || fileEndings !== "undefined") {
    $("#setup-card").append("<p>Great! Here's what we found from your config: <br><strong>Website Title:</strong> " + websiteTitle + "<br><strong>Content Directory:</strong> " + contentDir + "<br><strong>Common File Ending:</strong> " + fileEndings + "<br>Something wrong? Go ahead and edit your config to fix it!<br>If everything checks out, edit 'setUpCompleted' in your config and set it to true. Once that's done, <a href='\#index'>go to the index</a>. If you're redirected here, make sure that 'setUpCompleted' was set to false and try again. If it still doesn't work, please contact me via GitHub.");
  }
}, function(error) {
  // Something went wrong (e.g. request timed out)
  alert(error);
});

// function performSetup() {
//   var siteTitle = siteData.get("websiteTitle");
//   alert(siteTitle);
//
//   $("#website-title").on("input", function(e) {
//     var title = $("#website-title").val();
//     siteData.set("websiteTitle", title);
//
//     siteData.save(null, {
//       success: function(siteData) {
//         $("#title-save-status").html("Saved as " + siteData.get("websiteTitle"));
//       },
//       error: function(siteData, error) {
//         alert("Failed to save website title! " + error.message);
//       }
//     });
//   });
//
//   $("#content-dir").on("input", function(e) {
//     var titleEscapeChar = $("#content-dir").val().replace( /'|"/gi, function(x){return "\\" + x;} );
//     siteData.set("contentDir", titleEscapeChar);
//
//     siteData.save(null, {
//       success: function(siteData) {
//         alert(siteData.id);
//       },
//       error: function(siteData, error) {
//         alert("Failed to save website title!");
//       }
//     });
//   });
//
//   $("#pri-file-type").on("input", function(e) {
//     var titleEscapeChar = $("#pri-file-type").val().replace( /'|"/gi, function(x){return "\\" + x;} );
//     siteData.set("priFileType", titleEscapeChar);
//
//     siteData.save(null, {
//       success: function(siteData) {
//         alert(siteData.id);
//       },
//       error: function(siteData, error) {
//         alert("Failed to save website title!");
//       }
//     });
//   });
// }
//
// $(document).ready(performSetup);
