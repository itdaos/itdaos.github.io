$(document).ready(function() {
  $("#trigger-1").click(function () {
    $("#tabs-1").removeClass("d-none");
    $("#tabs-2").addClass("d-none");
    $("#tabs-3").addClass("d-none");
  });

  $("#trigger-2").click(function () {
    $("#tabs-2").removeClass("d-none");
    $("#tabs-1").addClass("d-none");
    $("#tabs-3").addClass("d-none");
  });

  $("#trigger-3").click(function () {
    $("#tabs-3").removeClass("d-none");
    $("#tabs-2").addClass("d-none");
    $("#tabs-1").addClass("d-none");
  });
});
