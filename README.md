This is a WIP repo for the cards back-end code (like LESS files, etc.). The goal of this repo is to reduce server bandwidth usage for admins with site plans that have bandwidth usage limits.

To use this online repo, open index.html in your site's root (not the one in your content folder!) and look for the following line (or something that looks like this):

`<link rel="stylesheet/less" type="text/css" href="dependencies/css/imports.less">`

... and replace it with:

`<link rel="stylesheet/less" type="text/css" href="https://raw.githubusercontent.com/1Achmed1/Cards/cards-repo/imports.less">`

... and save it, and you'll be using the online CSS dependencies.

If you want to or need to use custom styles, make a custom stylesheet and link it separately in your index.
