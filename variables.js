// Opening and closing the footer
var footerOpen = "Click to Open the Footer";
var footerClose = "Click to Close the Footer";

// Fallback title
var titleFallback = "Cards";
var websiteTitle = "Cards by Andrew Ward";

// For inital set up. Do not delete unless you want to go through the setup process again
var setUpCompleted = true;

// Directory for content HTML files, content is default
var contentDir = "content";
// The file endings in the content directory. Should be ".html" for HTML files and ".php" for PHP files, etc.
var fileEndings = ".html";

// For if you want to and/or are capable of using PHP on your site
var canPHP = false;

// **SPECIAL FILE ENDINGS**
// THIS SECTION IS ONLY TO BE USED IF SOME FILES DON'T USE THE ABOVE FILE EXTENSION:
// EX: Most files are .html but there's also one or two files that are .php
// IMPORTANT NOTE: DO NOT REMOVE THE specialFiles ARRAY!
// FILE ASSOCIATIONS SHOULD BE ADDED BELOW IT
var specialFiles = {};
// EXAMPLE:
specialFiles["login-page"] = ["login-page", "php"];
