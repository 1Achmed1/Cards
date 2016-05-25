/*
* HTMLIncldes is an open source library created by Andrew Ward and its contributors.
* The offical repo can be found at //github.com/1Achmed1/htmlincludes.
*/

var includeContainer = $("[data-include]");
var containerData = includeContainer.data('include');

function htmlInclude(dest, file) {
  $(dest).load(file);
}

function dataInclude() {
  includeContainer.load(containerData);
}

$(document).ready(function() {
  dataInclude();
});
