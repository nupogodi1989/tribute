$(document).ready(function() {
  //$("#heading").addClass("animated slideInDown");
  $("#heading").on({
    "mouseover" : function() {
        $(this).html("<img style='width: 373.3333333333333px; height: 280px;' src='./resources/images/alexander_shulgin.jpg'>");
    },
    "mouseout" : function() {
        $(this).html("<h1 class='text-center psychedelic-purple' id='heading'>Alexander Shulgin</h1>");
    }
  });
});
