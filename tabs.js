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

  $("#cab-trigger-1").click(function () {
    $("#cab-tabs-1").removeClass("d-none");
    $("#cab-tabs-2").addClass("d-none");
    $("#cab-tabs-3").addClass("d-none");
    $("#cab-trigger-1").addClass("t-active");
    $("#cab-trigger-2").removeClass("t-active");
    $("#cab-trigger-3").removeClass("t-active");
  });

  $("#cab-trigger-2").click(function () {
    $("#cab-tabs-2").removeClass("d-none");
    $("#cab-tabs-1").addClass("d-none");
    $("#cab-tabs-3").addClass("d-none");
    $("#cab-trigger-2").addClass("t-active");
    $("#cab-trigger-1").removeClass("t-active");
    $("#cab-trigger-3").removeClass("t-active");
  });

  $("#cab-trigger-3").click(function () {
    $("#cab-tabs-3").removeClass("d-none");
    $("#cab-tabs-2").addClass("d-none");
    $("#cab-tabs-1").addClass("d-none");
    $("#cab-trigger-3").addClass("t-active");
    $("#cab-trigger-2").removeClass("t-active");
    $("#cab-trigger-1").removeClass("t-active");
  });
});
