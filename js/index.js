$(document).ready(function() {
  //$("#heading").addClass("animated slideInDown");
  $("#heading").on({
    "mouseover" : function() {
        $(this).html("<img style='width: 373.3333333333333px; height: 280px;' src='./resources/images/MDMA.svg'>");
    },
    "mouseout" : function() {
        $(this).html("<h1 class='text-center' id='heading'>Alexander Shulgin</h1>");
    }
  });
});
