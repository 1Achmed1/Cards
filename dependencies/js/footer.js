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

$(document).ready(function() {
  footerToggle();
});
