var jsFiles = [];

function importjs(file) {
  jsFiles.push(file + ".js");
  if (file == 'vars') {
    jsFiles.push("variables.js");
  }
}

$(window).load(function () {
  $.each(jsFiles, function (key, value) {
    $("body").append('<script src="' + value + '" type="text/javascript"></script>');
  });
});
