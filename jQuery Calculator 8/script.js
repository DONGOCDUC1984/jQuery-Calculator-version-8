$("#d0").click(function () {
  $("#dinput").append("0");
});
$("#d1").click(function () {
  $("#dinput").append("1");
});
$("#d2").click(function () {
  $("#dinput").append("2");
});
$("#d3").click(function () {
  $("#dinput").append("3");
});
$("#d4").click(function () {
  $("#dinput").append("4");
});
$("#d5").click(function () {
  $("#dinput").append("5");
});
$("#d6").click(function () {
  $("#dinput").append("6");
});
$("#d7").click(function () {
  $("#dinput").append("7");
});
$("#d8").click(function () {
  $("#dinput").append("8");
});
$("#d9").click(function () {
  $("#dinput").append("9");
});
$("#dadd").click(function () {
  $("#dinput").append("+");
});
$("#dsub").click(function () {
  $("#dinput").append("-");
});
$("#dmul").click(function () {
  $("#dinput").append("*");
});
$("#ddiv").click(function () {
  $("#dinput").append("/");
});

$("#dequal").click(function () {
  var result = eval($("#dinput").text());
  $("#dinput").text(result);
});

$("#droot").click(function () {
  var A = $("#dinput").text();
  var B = parseFloat(A);
  var result = Math.sqrt(B);
  $("#dinput").text(result);
});

$("#dpow").click(function () {
  var A = $("#dinput").text();
  var B = parseFloat(A);
  var result = Math.pow(B, 2);
  $("#dinput").text(result);
});
$("#dfac").click(function () {
  var A = $("#dinput").text();
  var B = parseFloat(A);
  var result = 1;
  for (var i = 1; i <= B; i++) {
    result *= i;
  }
  $("#dinput").text(result);
});
$("#ddec").click(function () {
  $("#dinput").append(".");
});
$("#dneg").click(function () {
  var A = $("#dinput").text();
  var B = parseFloat(A);
  $("#dinput").html(-1 * B);
});

$("#ddel").click(function () {
  var A = $("#dinput").text();
  $("#dinput").text(A.slice(0, -1));
});
$("#dac").click(function () {
  $("#dinput").empty();
});
